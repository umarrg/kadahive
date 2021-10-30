<template>
  <v-row class="primary">
    <v-container>
      <v-row>
        <v-col cols="12" md="12">
          <div class="text-center">
            <p class="font-weight-bold white--text text-h4">Most Watched</p>
            <p class="text-center accent--text text-subtitle-1">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
              earum magni perferendis itaque
            </p>
          </div>
        </v-col>

        <v-col cols="12" md="12" class="px-0 mx-0">
          <div class="text-center" v-if="loading">
            <v-progress-circular indeterminate color="white" ></v-progress-circular>
          </div>
          <v-slide-group v-model="model" dark show-arrows class="ma-0">
            <v-slide-item v-for="item in items" :key="item.id">
              <div rounded="lg" :class="{ 'on-hover': hover }">
                <v-img
                  class="ma-4"
                  width="150"
                  height="200"
                  contain
                  :src="item.poster"
                  @click="go(item.id)"
                >
                  <div class="float-end" v-if="hover">
                    <span class="white--text text-grow text-body-1">
                      {{ item.name }}
                    </span>
                  </div>
                </v-img>
                <span class="white--text d-flex align-center justify-center">{{
                  item.name
                }}</span>
              </div>
            </v-slide-item>
          </v-slide-group>
        </v-col>
      </v-row>
    </v-container>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      model: null,
      items: [],
      loading: false,
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
          this.loading = false
          console.log(res.payload);
        });
    },
    go(id) {
      this.$router.push(`/videoView/${id}`);
    },
  },

  computed: {
    columns() {
      if (this.$vuetify.breakpoint.xl) {
        return 4;
      }

      if (this.$vuetify.breakpoint.lg) {
        return 3;
      }

      if (this.$vuetify.breakpoint.md) {
        return 2;
      }

      return 1;
    },
  },

  mounted() {
    this.fetchTrending();
  },
};
</script>