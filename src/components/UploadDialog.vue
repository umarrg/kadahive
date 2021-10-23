<template>
  <v-dialog v-model="dialog" persistent width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" dark v-bind="attrs" v-on="on"> Create </v-btn>
    </template>
    <v-card dark>
      <v-card-title>
        <span class="text-h5">Upload a video</span>
        <v-spacer></v-spacer>
        <v-icon @click="dialog = false">mdi-close</v-icon>
      </v-card-title>

      <v-divider></v-divider>
      <v-card-text>
        <v-row class="mt-5">
          <v-col cols="12" md="12" class="py-0">
            <v-file-input
              outlined
              placeholder="Upload your video"
              prepend-icon=""
              v-model="video"
              counter
              multiple
              label="video"
              required
              prepend-inner-icon="mdi-video"
            ></v-file-input>
          </v-col>
          <v-col cols="12" md="12" class="py-0">
            <v-text-field
              label="Title*"
              required
              outlined
              v-model="title"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="12" class="py-0">
            <v-textarea
              outlined
              label="Describtion"
              required
              v-model="desc"
            ></v-textarea>
          </v-col>
          <v-col cols="12" md="6" class="py-0">
            <span>Thumbnail</span>

            <v-file-input
              outlined
              accept="image/png, image/jpeg, image/bmp"
              prepend-icon=""
              placeholder="Thumbnail"
              required
              v-model="thumbnail"
              prepend-inner-icon="mdi-camera"
            ></v-file-input>
          </v-col>
          <v-col cols="12" md="6" class="py-0">
            <span>Genre</span>

            <v-select
              :items="['Anime', 'Bollywood', 'Hollywood', 'Kannywood']"
              placeholder="Genre*"
              required
              v-model="genres"
              outlined
            ></v-select>
          </v-col>
        </v-row>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="secondary" @click="save()"> save </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>


    <script>
export default {
  data: () => ({
    dialog: false,
    video: "",
    thumbnail: "",
    title: "",
    desc: "",
    genres: "",
  }),
  methods: {
    save() {
      const data = {
        video: this.video,
        thumbail: this.thumbnail,
        title: this.title,
        desc: this.desc,
        genre: this.genres,
      };

      console.log("upload", data);
    },
  },
};
</script>