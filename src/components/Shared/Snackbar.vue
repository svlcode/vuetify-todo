<template>
	<v-snackbar v-model="$store.state.snackbar.show">
		{{ $store.state.snackbar.text }}

		<template v-slot:action="{ attrs }">
			<v-btn text v-bind="attrs" @click.stop="hideSnack()"> Close </v-btn>
		</template>
	</v-snackbar>
</template>

<script>
export default {
	methods: {
		hideSnack() {
			this.$store.commit('hideSnackbar');
		},
	},
};
</script>

<style></style>
