<template>
  <div class="home">
    <v-text-field class="pa-3"
            outlined
            label="Add task"
            append-icon="mdi-plus"
            hide-details
            clearable
            v-model="newTaskTitle"
            @click:append="addTask"
            @keyup.enter="addTask"
          >
    </v-text-field>
    <v-list 
      v-if="tasks.length"
      class="pt-0"
      flat
    >
      <div
        v-for="task in tasks" 
        :key="task.id"
      >
        <v-list-item 
          @click="doneTask(task.id)"
          :class="{ 'blue lighten-5': task.done }"
          >
          <template v-slot:default>
            <v-list-item-action>
              <v-checkbox :input-value="task.done"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title :class="{ 'text-decoration-line-through': task.done }">{{task.title}}</v-list-item-title>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn icon @click.stop="deleteTask(task.id)">
                <v-icon color="primary lighten-1">mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>

          </template>
          <v-divider></v-divider>
        </v-list-item>
        <v-divider></v-divider>
      </div>
      
    </v-list>
    <div
      v-else
      class="no-tasks"
    >
      <v-icon
        size="100"
        color="primary"
      >
        mdi-check
      </v-icon>
      <div class="text-h5 primary--text">
        No tasks
      </div>
    </div>
  </div>
  
</template>

<script>
  export default {
    name: 'Todo',
    data() {
      return {
        newTaskTitle: null,
      };
    },
    methods: {
      doneTask(id) {
       this.$store.commit('doneTask', id);
      },
      deleteTask(id) {
        this.$store.commit('deleteTask', id);
      },
      addTask() {
        this.$store.commit('addTask', this.newTaskTitle);
        this.newTaskTitle = '';
      }
    },
    computed: {
      tasks() {
        return this.$store.state.tasks;
      }
    }
  }
</script>

<style lang="sass">
.no-tasks 
  position: absolute
  left: 50%
  top: 50%
  transform: translate(-50%, -50%)
  opacity: 0.5

</style>
