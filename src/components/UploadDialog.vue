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
              label="click here to upload"
              prepend-icon=""
              v-model="video"
              counter
              multiple
              required
              prepend-inner-icon="mdi-video"
            ></v-file-input>
          </v-col>
          <v-col cols="12" md="12" class="py-0">
            <span>Name</span>
            <v-text-field
              label="Enter movie name"
              required
              outlined
              v-model="name"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="12" class="py-0">
            <span>Title</span>
            <v-text-field
              label="Enter movie title"
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
            <v-file-input
              outlined
              accept="image/png, image/jpeg, image/bmp"
              prepend-icon=""
              label="select movie poster"
              required
              v-model="thumbnail"
              prepend-inner-icon="mdi-camera"
            ></v-file-input>
          </v-col>
          <v-col cols="12" md="6" class="py-0">
            <v-select
              :items="['Public', 'Restricted']"
              label="Type"
              required
              v-model="type"
              outlined
            ></v-select>
          </v-col>
          <v-col cols="12" md="12" class="py-0" v-if="type == 'Restricted'">
            <span>Price</span>
            <v-text-field
              label="Enter movie Price"
              required
              outlined
              suffix="$"
              v-model="price"
            ></v-text-field>
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
    type: "",
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