<template>
	<div class="text-subtitle-1 ml-4">{{ date }}</div>
</template>

<script>
import { format } from 'date-fns';

export default {
	data() {
		return {
			date: '',
		};
	},
	methods: {
		getDate() {
			setInterval(() => {
				this.date = format(new Date(), 'MMM d, HH:mm:ss');
			}, 1000);
		},
	},
	mounted() {
		this.getDate();
	},
};
</script>

<style></style>
