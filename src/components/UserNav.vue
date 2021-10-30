
<template>
  <nav class="mb-0">
    <v-app-bar color="primary" app>
      <v-app-bar-nav-icon small dark @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      color="primary"
      app
      elevation="6"
      width="300"
    >
      <v-layout column align-center class="">
        <v-flex class="my-12">
          <router-link to="/">
            <span class="white--text text-h5">VideoTube </span></router-link
          >
        </v-flex>
      </v-layout>
      <v-divider></v-divider>
      <v-list>
        <v-list-item
          active-class="border"
          v-for="item in items"
          :key="item.icon"
          :to="item.route"
          link
        >
          <v-list-item-icon>
            <v-icon color="white">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-title class="white--text">{{
            item.text
          }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  components: {},
  data: () => ({
    drawer: null,
    items: [
      { icon: "mdi-view-dashboard", text: "My videos", route: "/userVideos" },
      {
        icon: "mdi-alpha-c-circle-outline",
        text: "Channels",
        route: "userChannels",
      },
      { icon: "mdi-history", text: "Watch history", route: "/watchHistory" },
      { icon: "mdi-wallet", text: "Wallet", route: "/wallet" },
      { icon: "mdi-account", text: "My profile", route: "/userProfile" },
    ],
  }),
  methods: {},
};
</script>
<style>
.border {
  color: #1f3a67;
}
.headline {
  color: #1f3a67;
  font-weight: 700;
}
.custom_color {
  background: #2a4f66;
}
.custom__card {
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(13, 149, 193, 1) 0%,
    rgba(31, 58, 103, 1) 0%,
    rgba(13, 149, 193, 1) 100%,
    rgba(0, 212, 255, 0.9906163148853291) 100%
  );
}
</style>