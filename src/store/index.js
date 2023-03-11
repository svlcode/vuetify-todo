import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    appTitle: process.env.VUE_APP_TITLE,
    search: null,
    tasks: [
      {
        id: 1,
        title: 'Learn',
        done: false,
        dueDate: '2023-01-21',
      },
      {
        id: 2,
        title: 'Do sport',
        done: true,
        dueDate: '2023-02-17',
      },
      {
        id: 3,
        title: 'Read a book',
        done: false,
        dueDate: null,
      },
    ],
    snackbar: {
      show: false,
      text: 'this is my title',
    },
  },
  getters: {},
  mutations: {
    setSearch(state, search) {
      state.search = search;
    },
    addTask(state, newTaskTitle) {
      const task = {
        id: state.tasks.length + 1,
        title: newTaskTitle,
        done: false,
        dueDate: null,
      };
      state.tasks.push(task);
    },
    updateTask(state, { id, newTaskTitle }) {
      const task = state.tasks.find((t) => t.id === id);
      if (task) {
        task.title = newTaskTitle;
      }
    },
    updateDueDate(state, { id, dueDate }) {
      const task = state.tasks.find((t) => t.id === id);
      if (task) {
        task.dueDate = dueDate;
      }
    },
    deleteTask(state, taskId) {
      state.tasks.splice(
        state.tasks.findIndex((t) => t.id == taskId),
        1
      );
    },
    doneTask(state, id) {
      const task = state.tasks.find((t) => t.id === id);
      if (task) {
        task.done = !task.done;
      }
    },
    showSnackbar(state, text) {
      let timeout = 0;
      if (state.snackbar.show) {
        state.snackbar.show = false;
        timeout = 300;
      }
      setTimeout(() => {
        state.snackbar.show = true;
        state.snackbar.text = text;
      }, timeout);
    },
    hideSnackbar(state) {
      state.snackbar.show = false;
    },
  },
  actions: {
    addTask({ commit }, newTaskTitle) {
      commit('addTask', newTaskTitle);
      commit('showSnackbar', `Task ${newTaskTitle} was added`);
    },
    deleteTask({ commit }, id) {
      const task = this.state.tasks.find((t) => t.id === id);
      commit('deleteTask', id);
      if (task) {
        commit('showSnackbar', `Task ${task.title} was deleted`);
      }
    },
    updateTask({ commit }, payload) {
      commit('updateTask', payload);
      commit('showSnackbar', `Task updated`);
    },
    updateDueDate({ commit }, payload) {
      commit('updateDueDate', payload);
      commit('showSnackbar', 'Due Date updated');
    },
  },
  getters: {
    tasksFiltered(state) {
      if (!state.search) return state.tasks;
      return state.tasks.filter((t) =>
        t.title.toLowerCase().includes(state.search.toLowerCase())
      );
    },
  },
  modules: {},
});
