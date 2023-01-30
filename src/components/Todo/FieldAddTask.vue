<template>
	<v-text-field
		class="pa-3"
		outlined
		label="Add task"
		hide-details
		clearable
		v-model="newTaskTitle"
		@keyup.enter="addTask"
	>
		<template v-slot:append>
			<v-icon color="primary" @click="addTask" :disabled="!isTitleValid"
				>mdi-plus</v-icon
			></template
		>
	</v-text-field>
</template>

<script>
export default {
	data() {
		return {
			newTaskTitle: '',
		};
	},
	computed: {
		isTitleValid() {
			return !!this.newTaskTitle;
		},
	},
	methods: {
		addTask() {
			if (this.isTitleValid) {
				this.$store.dispatch('addTask', this.newTaskTitle);
				this.newTaskTitle = '';
			}
		},
	},
};
</script>

<style></style>
