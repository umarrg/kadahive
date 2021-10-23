<template>
  <v-app class="custom_col"
    >
    <v-container>
      <v-row>
        <v-col cols="12" md="3" v-for="item in items" :key="item.id">
          <v-img
            class="ma-4"
            width="200"
            contain
            :src="item.thumbnail"
            @click="go(item.id)"
          >
            <div class="d-flex align-end justify-end">
              <span v-if="hover">
                {{ item.title }}
              </span>
            </div>
          </v-img>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
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

  mounted() {
    this.fetchTrending();
  },
};
</script>

<style scoped>
.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
.custom_col {
  background-color: #2b273f;
}
</style>

