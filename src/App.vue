<template>
  <v-app>
    <PriNav v-if="$route.meta.showHeader == true" />
     <UserNav v-if="$route.meta.userDash == true" />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import UserNav from "./components/UserNav.vue";
import PriNav from "./components/PrimaryNavbar.vue";
export default {
  name: "App",
  components: {
    PriNav,
    UserNav
  },

  data: () => ({
    //
  }),
};
</script>
