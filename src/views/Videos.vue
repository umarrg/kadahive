<template>
  <v-app class="primary">
    <v-container>
      <v-row>
        <v-col cols="12" md="12">
          <v-slide-group v-model="model" dark show-arrows class="ma-0">
            <v-slide-item v-for="item in items" :key="item.id">
              <div rounded="lg" class="">
                <v-img
                  class="ma-4"
                  width="200"
                  contain
                  :src="item.poster"
                  @click="go(item.id)"
                />
              </div>
            </v-slide-item>
          </v-slide-group>
          <v-slide-group v-model="model" dark show-arrows class="ma-0">
            <v-slide-item v-for="item in items" :key="item.id">
              <div rounded="lg" class="">
                <v-img
                  class="ma-4"
                  width="200"
                  contain
                  :src="item.poster"
                  @click="go(item.id)"
                />
              </div>
            </v-slide-item>
          </v-slide-group>
          <v-slide-group v-model="model" dark show-arrows class="ma-0">
            <v-slide-item v-for="item in items" :key="item.id">
              <div rounded="lg" class="">
                <v-img
                  class="ma-4"
                  width="200"
                  contain
                  :src="item.poster"
                  @click="go(item.id)"
                />
              </div>
            </v-slide-item>
          </v-slide-group>
        </v-col>
        <v-col cols="12"> </v-col>
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
      fetch("http://localhost:3000/videos", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          this.items = res.payload;
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