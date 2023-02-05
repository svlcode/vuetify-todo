<template>
	<v-text-field
		class="expanding-search mt-1"
		:class="{ closed: searchClosed && !$store.state.search }"
		@focus="searchClosed = false"
		@blur="searchClosed = true"
		placeholder="Search"
		filled
		dense
		clearable
		prepend-inner-icon="mdi-magnify"
		:value="$store.state.search"
		@input="updateSearch($event)"
	></v-text-field>
</template>

<script>
export default {
	data() {
		return {
			searchClosed: true,
			debounceSearchAction: null,
		};
	},
	computed: {
		debounceSearch() {
			if (!this.debounceSearchAction) {
				this.debounceSearchAction = this.debounce((value) => {
					this.$store.commit('setSearch', value);
				});
			}
			return this.debounceSearchAction;
		},
	},
	methods: {
		updateSearch(search) {
			this.debounceSearch(search);
		},
		debounce(cb, delay = 200) {
			let timeout;
			return (...args) => {
				clearTimeout(timeout);
				timeout = setTimeout(() => {
					cb(...args);
				}, delay);
			};
		},
	},
};
</script>

<style lang="sass">
.expanding-search
	transition: max-width 0.3s
	.v-input__slot
		cursor: pointer !important
		&:before, &:after
			border-color: transparent !important
	&.closed
		max-width: 45px
		.v-input__slot
			background: transparent !important
</style>
