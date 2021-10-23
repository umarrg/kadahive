<template>
  <v-app>
    <PriNav v-if="$route.meta.showHeader == true" />
    <UserNav v-if="$route.meta.userDash == true" />
    <CreatorNav v-if="$route.meta.creatorDash == true" />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import CreatorNav from "../src/components/CreatorNav.vue";
import UserNav from "./components/UserNav.vue";
import PriNav from "./components/PrimaryNavbar.vue";
export default {
  name: "App",
  components: {
    PriNav,
    UserNav,
    CreatorNav,
  },

  data: () => ({
    //
  }),
};
</script>
