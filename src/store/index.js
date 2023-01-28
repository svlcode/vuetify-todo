import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		tasks: [
			{
				id: 1,
				title: 'Learn',
				done: false,
			},
			{
				id: 2,
				title: 'Do sport',
				done: true,
			},
			{
				id: 3,
				title: 'Read a book',
				done: false,
			},
		],
		snackbar: {
			show: false,
			text: 'this is my title',
		},
	},
	getters: {},
	mutations: {
		addTask(state, newTaskTitle) {
			if (newTaskTitle) {
				const task = {
					id: state.tasks.length + 1,
					title: newTaskTitle,
					done: false,
				};
				state.tasks.push(task);
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
			commit('showSnackbar', `task ${newTaskTitle} was added`);
		},
		deleteTask({ commit }, id) {
			const task = this.state.tasks.find((t) => t.id === id);
			commit('deleteTask', id);
			if (task) {
				commit('showSnackbar', `task ${task.title} was deleted`);
			}
		},
	},
	modules: {},
});
