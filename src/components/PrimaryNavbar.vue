<template>
  <v-app-bar elevate-on-scroll app color="primary">
    <v-spacer></v-spacer>
    <v-app-bar-title class="white--text">
      <router-link to="/">
        <span class="white--text text-h5">VideoTube</span></router-link
      >
    </v-app-bar-title>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <div class="d-flex">
      <v-btn text color="white" to="/videos" class="mx-1 text-h6">videos</v-btn>
      <v-btn
        text
        color="white"
        to="/content"
        v-if="currentUser.userType == 'contentCreator'"
        class="text-h6"
        >creator</v-btn
      >
    </div>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <div class="d-flex" v-if="currentUser.userType == null">
      <v-btn text large color="accent" to="/login" class="mx-2">login</v-btn>
      <v-btn color="secondary" large to="/register">Sign up</v-btn>
    </div>
    <div
      class="d-flex align-center justify-center"
      v-if="currentUser.userType == 'user'"
    >
      <v-avatar size="30" color="white">
        <img src="../assets/im.jpeg" alt="picture" />
      </v-avatar>
      <span class="mx-2 white--text text-subtitle-1">{{
        currentUser.username
      }}</span>
      <v-menu bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn dark icon v-bind="attrs" v-on="on">
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item to="/userVideos" dense class="text-body-2">
            <v-list-item-title class="px-0 mx-0">
              <v-icon left>mdi-view-dashboard</v-icon> Dashboard
            </v-list-item-title>
          </v-list-item>
          <v-list-item dense to="/login" @click="logout()">
            <v-list-item-title>
              <v-icon>mdi-logout</v-icon> Logout
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
    <div
      class="d-flex align-center justify-center"
      v-if="currentUser.userType == 'contentCreator'"
    >
      <v-avatar size="30" color="white">
        <img src="../assets/im.jpeg" alt="picture" />
      </v-avatar>
      <span class="mx-2 white--text text-subtitle-1">{{
        currentUser.username
      }}</span>
      <v-menu bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn dark icon v-bind="attrs" v-on="on">
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item to="/content" dense class="text-body-2">
            <v-list-item-title class="px-0 mx-0">
              <v-icon left>mdi-view-dashboard</v-icon> Dashboard
            </v-list-item-title>
          </v-list-item>
          <v-list-item dense to="/login" @click="logout()">
            <v-list-item-title>
              <v-icon>mdi-logout</v-icon> Logout
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>



<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    logged: false,
    user: localStorage.getItem("user"),
  }),

  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
  computed: {
    ...mapGetters(["currentUser", "isAuthenticated"]),
  },
};
</script>