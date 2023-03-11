<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app :mobile-breakpoint="768">
      <v-img
        class="pa-4 pt-6"
        gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        height="170"
        src="./assets/holiday_stars.jpg"
      >
        <v-avatar size="70" class="mb-2">
          <v-img src="./assets/face.jpg" alt="John"></v-img>
        </v-avatar>
        <div class="white--text text-subtitle-1 font-weight-bold">
          John Smith
        </div>
        <div class="white--text text-subtitle-2">john_smith2023</div>
      </v-img>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link :to="item.to">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      prominent
      color="primary"
      dark
      src="./assets/holiday_stars.jpg"
      height="170"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>
      <v-container class="header-container pa-0 pt-2">
        <v-row>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          <v-spacer></v-spacer>
          <search ref="txtSearch" />
        </v-row>
        <v-row>
          <v-toolbar-title class="text-h4 ml-4">{{
            $store.state.appTitle
          }}</v-toolbar-title>
        </v-row>
        <v-row>
          <live-date-time />
        </v-row>
      </v-container>
    </v-app-bar>

    <v-main>
      <router-view />
      <snackbar />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    items: [
      { title: 'Todo', icon: 'mdi-format-list-checks', to: '/' },
      { title: 'About', icon: 'mdi-help-box', to: '/about' },
    ],
  }),
  components: {
    snackbar: require('@/components/Shared/Snackbar.vue').default,
    'live-date-time': require('@/components/Tools/LiveDateTime.vue').default,
    search: require('@/components/Tools/Search.vue').default,
  },
  methods: {},
};
</script>

<style lang="sass">
.header-container
  max-width: none !important
</style>
