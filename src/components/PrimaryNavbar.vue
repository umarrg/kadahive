<template>
  <nav>
    <v-app-bar elevate-on-scroll app color="primary" v-if="user">
      <v-spacer></v-spacer>
      <v-app-bar-title class="white--text">
        <router-link to="/">
          <span class="white--text text-h5">VideoTube</span></router-link
        >
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <div class="d-flex">
        <v-btn text color="white" to="/videos" class="mx-1 text-h6"
          >videos</v-btn
        >
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
      <div class="d-flex" v-if="currentUser.userType == ''">
        <v-btn text large color="accent" to="/login" class="mx-2">login</v-btn>
        <v-btn color="secondary" large to="/register">Sign up</v-btn>
      </div>
      <div
        class="d-flex align-center justify-center"
        v-if="currentUser.userType == 'user'"
      >
        <v-avatar size="30" color="white">
          <img src="data:image/png;base64,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" alt="picture" />
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
          <img
            src="data:image/png;base64,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"
            alt="picture"
          />
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
    <v-app-bar elevate-on-scroll app color="primary" v-if="!user">
      <v-spacer></v-spacer>
      <v-app-bar-title class="white--text">
        <router-link to="/">
          <span class="white--text text-h5">VideoTube</span></router-link
        >
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>

      <v-spacer></v-spacer>
      <div class="d-flex">
        <v-btn text large color="accent" to="/login" class="mx-2">login</v-btn>
        <v-btn color="secondary" large to="/register">Sign up</v-btn>
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>
  </nav>
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