import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

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
				state.tasks.indexOf((t) => t.id == taskId),
				1
			);
		},
		doneTask(state, id) {
			const task = state.tasks.find((t) => t.id === id);
			if (task) {
				task.done = !task.done;
			}
		},
	},
	actions: {},
	modules: {},
});
