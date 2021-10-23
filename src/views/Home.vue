<template>
  <v-app class="primary">

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
