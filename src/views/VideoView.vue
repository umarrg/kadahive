<template>
  <v-app class="primary videoView">
    <v-container>
      <v-row>
        <v-col cols="12" md="7">
          <div id="">
            <video
              @pause="pause"
              width="100%"
              height="400px"
              :src="video.video"
              class="custom__video--overflow"
              :poster="video.poster"
              controls
              style="border-radius: 10px"
            ></video>
          </div>
          <div>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>
                  <h4 class="blue--text text-h4 font-weight-light">
                    {{ video.title }}
                  </h4>
                </v-list-item-title>
                <v-list-item-subtitle class="d-flex">
                  <span class="text-body-1 accent--text">33 views</span>
                  <span class="text-body-1 accent--text mx-4">4/7/2021</span>
                  <v-spacer></v-spacer>
                  <span class="accent--text">
                    <v-btn small icon color="accent" @click="like()"
                      ><v-icon left>mdi-thumb-up</v-icon></v-btn
                    >
                    {{ l }}</span
                  >
                  <span class="accent--text mx-3">
                    <v-btn
                      small
                      class="mx-2"
                      icon
                      color="accent"
                      @click="dislike()"
                      ><v-icon left>mdi-thumb-down</v-icon></v-btn
                    >
                    {{ d }}
                  </span>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <div class="d-flex"></div>
            <v-divider class="grey darken-1 mb-2"></v-divider>
            <p class="white--text font-weight-light">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi,
              sed ipsam nemo possimus accusamus nobis autem magnam corporis
              aliquid voluptate, porro sunt atque quod dignissimos expedita!
              Optio quod odit consequuntur?
            </p>
          </div>
        </v-col>
        <v-col cols="12" md="4" lg="4">
          <div class="d-flex flex-column white--text primary">
            <div tile class="cutom__card--overflow">
              <v-list
                class="py-0"
                color="secondary"
                v-for="item in videos"
                :key="item.id"
              >
                <v-list-item active-class="" class="px-2" @click="go(item)">
                  <v-list-item-avatar color="" tile aria-dropeffect>
                    <v-img :src="item.poster"></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content class="white--text">
                    <v-list-item-title>{{ item.name }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-divider color="accent"></v-divider>
              </v-list>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    video: [],
    current: {},
    l: 0,
    d: 0,
    videos: [],
    clicked: false,
  }),

  methods: {
    like() {
      this.l++;
    },
    dislike() {
      this.d++;
    },
    pause(e) {
      console.log("PAUSE EVENT", e);
    },
    go(item) {
      if (item.type === "restricted") {
        this.$router.push("/buy/" + item.id);
      } else {
        this.$router.push(`/videoView/${item.id}`);
    
      }
    },

    fetchVideos() {
      fetch("https://kadahive.herokuapp.com/videos", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          this.videos = res.payload;
          console.log(res.payload);
        });
    },
    fetchVideo() {
      let id = this.$route.params.id;
      fetch(`https://kadahive.herokuapp.com/videos/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          this.video = res.payload;
          this.current = res.payload.video;
          console.log(res.payload);
        });
    },
  },
  mounted() {
    this.fetchVideo();
    this.fetchVideos();
  },
  beforeUpdate() {},
};
</script>

<style lang="scss">
.custom__video--overflow {
  overflow: hidden;
}
.cutom__card--overflow {
  overflow-x: hidden;
  overflow-y: auto;
  height: 514px;
}

.custom_div {
  background: white;
}
.videoView {
  min-height: 100vh;
}
</style>
