<template>
  <div class="primary">
    <v-container class="mx-0 px-0">
      <v-row>
        <v-col cols="12" md="12">
          <div class="text-center">
            <p class="font-weight-bold white--text">Trending</p>
            <p class="text-center accent--text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
              earum magni perferendis itaque
            </p>
          </div>
        </v-col>

        <v-col cols="12" md="12" class="px-0 mx-0">
          <v-slide-group v-model="model" dark show-arrows class="ma-0">
            <v-slide-item v-for="item in items" :key="item.id">
              <v-hover v-slot="{ hover }">
                <div rounded="lg" :class="{ 'on-hover': hover }">
                  <v-img
                    class="ma-4"
                    height="200"
                    width="300"
                    contain
                    :src="item.thumbnail"
                    @click="go(item.id)"
                  >
                    <div class="d-flex align-end justify-end">
                      <span v-if="hover">
                        {{item.title}}
                        </span
                      >
                    </div>
                  </v-img>
                </div>
              </v-hover>
            </v-slide-item>
          </v-slide-group>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: null,
      items: [],
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

<style scoped>
.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>