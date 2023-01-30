<template>
	<v-dialog
		ref="dialog"
		:value="true"
		:return-value.sync="dueDate"
		persistent
		width="290px"
		@click:outside="$emit('close')"
	>
		<v-date-picker v-model="dueDate" scrollable>
			<v-spacer></v-spacer>
			<v-btn text color="primary" @click="$emit('close')"> Cancel </v-btn>
			<v-btn text color="primary" @click="save()"> OK </v-btn>
		</v-date-picker>
	</v-dialog>
</template>

<script>



export default {
	props: ['task'],
	data() {
		return {
			showDialog: true,
			dueDate: null,
		};
	},
	mounted() {
		this.dueDate = this.task.dueDate;
	},
	methods: {
		save() {
			const payload = {
				id: this.task.id,
				dueDate: this.dueDate,
			};
			this.$store.dispatch('updateDueDate', payload);
			this.$emit('close');
		},
	},
};
</script>

<style></style>
