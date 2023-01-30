<template>
	<v-text-field
		class="expanding-search mt-1"
		:class="{ closed: searchClosed }"
		@focus="searchClosed = false"
		@blur="onLostFocus"
		placeholder="Search"
		filled
		dense
		clearable
		prepend-inner-icon="mdi-magnify"
		v-model="searchValue"
	></v-text-field>
</template>

<script>
export default {
	data() {
		return {
			searchClosed: true,
			searchValue: null,
		};
	},
	methods: {
		onLostFocus() {
			if (!this.searchValue) {
				this.searchClosed = true;
			}
		},
	},
};
</script>

<style lang="sass">
.expanding-search
  .v-input__slot
    &:before, &:after
      border-color: transparent !important
  &.closed
    max-width: 45px
</style>
