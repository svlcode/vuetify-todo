<template>
	<div>
		<v-list-item
			@click="$store.commit('doneTask', task.id)"
			:class="{ 'blue lighten-5': task.done }"
		>
			<template v-slot:default>
				<v-list-item-action>
					<v-checkbox :input-value="task.done"></v-checkbox>
				</v-list-item-action>

				<v-list-item-content>
					<v-list-item-title
						:class="{ 'text-decoration-line-through': task.done }"
						>{{ task.title }}</v-list-item-title
					>
				</v-list-item-content>

				<v-list-item-action v-if="task.dueDate"
					><v-list-item-action-text>
						<v-btn text @click.stop="changeDueDate()">
							<v-icon small>mdi-calendar</v-icon>
							{{ task.dueDate | niceDate }}
						</v-btn>
					</v-list-item-action-text>
				</v-list-item-action>
				<v-list-item-action>
					<task-menu :task="task" />
				</v-list-item-action>
			</template>
			<v-divider></v-divider>
		</v-list-item>
		<v-divider></v-divider>
		<dialog-due-date
			:task="task"
			v-if="dialogs.dueDate"
			@close="dialogs.dueDate = false"
		/>
	</div>
</template>

<script>
import { format } from 'date-fns';

export default {
	props: {
		task: Object,
	},

	data() {
		return {
			dialogs: {
				delete: false,
				edit: false,
				dueDate: false,
			},
		};
	},
	filters: {
		niceDate(value) {
			return format(new Date(value), 'MMM d yyyy');
		},
	},
	components: {
		'task-menu': require('@/components/Todo/TaskMenu.vue').default,
		'dialog-due-date': require('@/components/Todo/Dialogs/DialogDueDate.vue')
			.default,
	},
	methods: {
		changeDueDate() {
			this.dialogs.dueDate = true;
		},
	},
};
</script>

<style></style>
