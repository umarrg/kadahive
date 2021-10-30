<template>
  <v-app class="primary">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="3"
          v-for="item in items"
          :key="item.id"
          class="text-xs-center text-center"
        >
          <div class="text-center" v-if="loading">
            <v-progress-circular
              indeterminate
              color="white"
              size="100"
            ></v-progress-circular>
          </div>
          <v-layout justify-center align-center>
            <v-flex shrink>
              <v-img
                class="my-3"
                width="200"
                contain
                height="300"
                :src="item.poster"
                @click="go(item.id)"
              >
              </v-img>
            </v-flex>
          </v-layout>

          <span class="white--text text-center">{{ item.name }}</span>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      model: null,
      items: [],
      loading: false,
      caro: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
    };
  },
  methods: {
    fetchTrending() {
      this.loading = true;
      fetch("https://kadahive.herokuapp.com/videos", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          this.items = res.payload;
          this.loading = false;
          console.log(res.payload);
        });
    },
    go(id) {
      this.$router.push(`/videoView/${id}`);
    },
  },

  mounted() {
    this.fetchTrending();
  },
};
</script>