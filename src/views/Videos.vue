<template>
  <v-app class="primary">
    <v-container>
      <v-row>
        <v-col cols="12" md="12" >
          <v-col cols="12" md="6" class="py-0">
            <v-text-field
              label="Search videos here"
              v-model="global"
              prepend-inner-icon="mdi-magnify"
              solo
            ></v-text-field>
          </v-col>
        </v-col>
        <v-col
          cols="12"
          md="3"
          v-for="item in search"
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
                @click="go(item)"
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
      global: "",
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
  computed: {
    search() {
      return this.items.filter((vd) => {
        return this.global
          .toLowerCase()
          .split(" ")
          .every((v) => vd.name.toLowerCase().includes(v));
      });
    },
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
    go(item) {
      if (item.type === "restricted") {
        this.$router.push("/buy/" + item.id);
      } else {
        this.$router.push(`/videoView/${item.id}`);
      }
    },
  },

  mounted() {
    this.fetchTrending();
  },
};
</script>