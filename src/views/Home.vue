<template>
  <v-app class="primary">
    <v-app-bar elevate-on-scroll app color="primary">
      <v-spacer></v-spacer>
      <v-app-bar-title class="white--text"> Logo </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <div class="d-flex">
        <v-btn text color="white" to="/videos">videos</v-btn>
        <v-btn text color="white">admin</v-btn>
      </div>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <div class="d-flex">
        <v-btn text large color="secondary" to="/login">login</v-btn>
        <v-btn color="secondary" large to="/register">Sign up</v-btn>
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-container>
      <Hero />
      <MostWatched />
      <Trending />
      <Be />
    </v-container>
    <Footer />
  </v-app>
</template>

<script>
import Hero from "../components/MainHero.vue";
import MostWatched from "../components/MostWatched.vue";
import Trending from "../components/Trending.vue";
import Be from "../components/BeACreator.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "Home",

  components: {
    Hero,
    MostWatched,
    Trending,
    Be,
    Footer,
  },
};
</script>
