<template>
  <v-app class="primary">
    <v-container>
      <v-row>
        <v-col cols="12" md="8">
        
            <video
              @pause="pause"
              @timeupdate="timeUpdate"
              width="100%"
              height="100%"
              :src="current"
              class=""
              :poster="video.thumbnail"
              controls
              style="border-radius: 10px"
            ></video>
         
        </v-col>
        <v-col cols="12" md="4">
          <p class="white--text"><strong>Title</strong> {{ video.title }}</p>
          <p class="white--text"><strong>Desc</strong> {{ video.desc }}</p>
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
    clicked: false,
  }),

  methods: {
    change(e) {
      console.log("CHANGE EVENT", e);
    },
    durationChange(e) {
      console.log("DURATION CHANGE EVENT", e);
    },
    ended(e) {
      console.log("ENDED EVENT", e);
    },
    pause(e) {
      console.log("PAUSE EVENT", e);
    },
    play(e) {
      console.log("PLAY EVENT", e);
    },
    playing(e) {
      console.log("PLAYING EVENT", e);
    },
    progress(e) {
      console.log("PROGRESS EVENT", e);
    },
    seeked(e) {
      console.log("SEEKED EVENT", e);
    },
    seeking(e) {
      console.log("SEEKING EVENT", e);
    },
    timeUpdate(e) {
      console.log("TIME UPDATE EVENT -- CURRENT TIME", e.target.currentTime);
    },
    changeVideo(e) {
      console.log(e);
      this.current = e;
      this.clicked = true;
    },
    fetchVideo() {
      let id = this.$route.params.id;
      fetch(`http://localhost:3000/videos/${id}`, {
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
}
.videoView {
  min-height: 100vh;
  //   background-size: cover;
  //   background-attachment: fixed;
}
// .player-container {
//     max-height: 200px !important;
//     min-width: 100%;
// }
.vjs-big-play-button {
  // color: orange !important;
  background-color: #2c3e50 !important;
}
</style>
