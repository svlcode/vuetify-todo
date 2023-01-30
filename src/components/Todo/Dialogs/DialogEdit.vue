<template>
	<v-dialog :value="true" @click:outside="$emit('close')" max-width="290">
		<v-card>
			<v-card-title class="text-h5"> Edit task </v-card-title>
			<v-card-text>
				Edit the title of this task:
				<v-text-field ref="txtTitle" v-model="title" @keyup.enter="save()" />
			</v-card-text>
			<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn text @click="$emit('close')"> Cancel </v-btn>
				<v-btn
					color="red darken-1"
					:disabled="!isTitleValid"
					text
					@click="save()"
				>
					Save
				</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
export default {
	props: {
		task: Object,
	},
	data() {
		return {
			showDialog: true,
			title: null,
		};
	},
	mounted() {
		this.title = this.task.title;
		this.$refs.txtTitle.focus();
	},
	computed: {
		isTitleValid() {
			return this.title && this.task.title !== this.title;
		},
	},
	methods: {
		save() {
			if (this.isTitleValid) {
				this.$store.dispatch('updateTask', {
					id: this.task.id,
					newTaskTitle: this.title,
				});
				this.$emit('close');
			}
		},
	},
};
</script>

<style></style>
