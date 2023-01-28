<template>
	<div>
		<v-menu bottom left>
			<template v-slot:activator="{ on, attrs }">
				<v-btn color="primary" icon v-bind="attrs" v-on="on">
					<v-icon>mdi-dots-vertical</v-icon>
				</v-btn>
			</template>

			<v-list>
				<v-list-item
					@click="handleClick(i)"
					v-for="(item, i) in items"
					:key="i"
				>
					<v-list-item-icon>
						<v-icon v-text="item.icon"></v-icon>
					</v-list-item-icon>
					<v-list-item-content>
						<v-list-item-title>{{ item.title }}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-menu>
		<dialog-delete
			:task="task"
			v-if="dialogs.delete"
			@close="dialogs.delete = false"
		/>
	</div>
</template>

<script>
export default {
	props: ['task'],
	data: () => ({
		items: [
			{
				title: 'Edit',
				icon: 'mdi-pencil',
				click() {
					console.log('edit');
				},
			},
			{ title: 'Due date', icon: 'mdi-calendar', click() {} },
			{
				title: 'Delete',
				icon: 'mdi-delete',
				click() {
					this.dialogs.delete = true;
				},
			},
		],
		dialogs: {
			delete: false,
      edit: false
		},
	}),
	components: {
		'dialog-delete': require('@/components/Todo/Dialogs/DialogDelete.vue')
			.default,
	},
	methods: {
		handleClick(idx) {
			this.items[idx].click.call(this);
		},
	},
};
</script>

<style></style>
