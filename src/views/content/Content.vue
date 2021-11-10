<template>
  <v-app class="custom__bg">
    <v-container>
      <v-row>
        <v-col cols="12" md="12">
          <v-data-table :headers="headers" :items="items">
            <template v-slot:top>
              <v-toolbar flat>
                <v-spacer></v-spacer>
                <v-dialog v-model="dialog" max-width="650px" dark>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      color="primary"
                      dark
                      class="mb-2"
                      v-bind="attrs"
                      v-on="on"
                    >
                      Upload
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-title>
                      <span class="text-h5">{{ formTitle }}</span>
                    </v-card-title>

                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="12" md="12" class="py-0">
                            <v-file-input
                              type="file"
                              id="input"
                              outlined
                              prepend-icon=""
                              prepend-inner-icon="mdi-video"
                              name="input_video"
                              @click="videos()"
                              accept="video/mp4, video/mov"
                            />
                          </v-col>
                          <v-col cols="12" md="12">
                            <video
                              id="video"
                              width="100%"
                              height="240"
                              controls
                              style="display: none"
                            ></video>
                          </v-col>
                          <v-col cols="12" md="12" class="py-0">
                            <v-text-field
                              label="Enter movie name"
                              required
                              outlined
                              v-model="editedItem.name"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" md="12" class="py-0">
                            <v-text-field
                              label="Enter movie title"
                              required
                              outlined
                              v-model="editedItem.title"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" md="12" class="py-0">
                            <v-textarea
                              outlined
                              label="Describtion"
                              required
                              v-model="editedItem.desc"
                            ></v-textarea>
                          </v-col>
                          <v-col cols="12" md="6" class="py-0">
                            <v-file-input
                              outlined
                              accept="image/png, image/jpeg, image/bmp"
                              prepend-icon=""
                              label="select movie poster"
                              required
                              v-model="editedItem.thumbnail"
                              prepend-inner-icon="mdi-camera"
                            ></v-file-input>
                          </v-col>
                          <v-col cols="12" md="6" class="py-0">
                            <v-select
                              :items="['Public', 'Restricted']"
                              label="Type"
                              required
                              v-model="editedItem.type"
                              outlined
                            ></v-select>
                          </v-col>
                          <v-col
                            cols="12"
                            md="12"
                            class="py-0"
                            v-if="editedItem.type == 'Restricted'"
                          >
                            <v-text-field
                              label="Enter movie Price"
                              required
                              outlined
                              suffix="$"
                              v-model="editedItem.price"
                            ></v-text-field>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="accent" text @click="close">
                        Cancel
                      </v-btn>
                      <v-btn color="accent" text @click="save">
                        Save
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
                <v-dialog v-model="dialogDelete" max-width="500px">
                  <v-card>
                    <v-card-title class="text-h5"
                      >Are you sure you want to delete this video?</v-card-title
                    >
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="accent" text @click="closeDelete"
                        >Cancel</v-btn
                      >
                      <v-btn
                        color="accent"
                        text
                        @click="deleteItemConfirm"
                        >OK</v-btn
                      >
                      <v-spacer></v-spacer>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
                <v-dialog v-model="dialogDelete" max-width="500px">
                  <v-card>
                    <v-card-title class="text-h5"
                      >Are you sure you want to delete this item?</v-card-title
                    >
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" text @click="closeDelete"
                        >Cancel</v-btn
                      >
                      <v-btn
                        color="blue darken-1"
                        text
                        @click="deleteItemConfirm"
                        >OK</v-btn
                      >
                      <v-spacer></v-spacer>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-toolbar>
            </template>
            <template v-slot:[`1item.actions`]="{ item }">
              <v-icon small class="mr-2" @click="editItem(item)">
                mdi-pencil
              </v-icon>
              <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
            </template>
            <template v-slot:[`item.name`]="{ item }">
              <v-list-item>
                <v-list-item-avatar tile size="80">
                  <v-img :src="item.thumbnail" />
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>
                    {{ item.name }}
                  </v-list-item-title>
                  <v-list-item-subtitle> subtitle </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </template>
            <template v-slot:[`item.actions`]="{ item }">
              <v-icon small class="mr-2" @click="editItem(item)">
                mdi-pencil
              </v-icon>
              <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "Video",
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "Date", value: "date" },
      { text: "Access Type", value: "type" },
      { text: "Views", value: "views" },
      { text: "Comment", value: "comment" },
      { text: "Actions", value: "actions" },
    ],
    items: [
      // {
      //   name: "Attack on titans",
      //   date: "2/3/2021",
      //   type: "public",
      //   views: "400",
      //   comment: "40",
      //   iron: "1%",
      //   thumbnail:
      //     "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1574144362",
      // },
      // {
      //   name: "silicon valley",
      //   date: "2/3/2021",
      //   type: "restricted",
      //   views: "400",
      //   comment: "40",
      //   thumbnail:
      //     "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1574144362",
      // },
      // {
      //   name: "Promise Neverland",
      //   date: "2/3/2021",
      //   type: "restricted",
      //   views: "400",
      //   comment: "40",
      //   thumbnail:
      //     "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1574144362",
      // },
      // {
      //   name: "Everything",
      //   date: "2/3/2021",
      //   views: "400",
      //   comment: "40",
      //   type: "restricted",
      //   thumbnail:
      //     "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1574144362",
      // },
      // {
      //   name: "Avatar",
      //   date: "2/3/2021",
      //   views: "400",
      //   comment: "40",
      //   type: "public",
      //   iron: "16%",
      //   thumbnail:
      //     "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1574144362",
      // },
      // {
      //   name: "Titans",
      //   date: "2/3/2021",
      //   views: "400",
      //   comment: "40",
      //   type: "restricted",
      //   iron: "0%",
      //   thumbnail:
      //     "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1574144362",
      // },
    ],
    editedIndex: -1,
    editedItem: {
      video: "",
      thumbnail:
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1453728013993-6d66e9c9123a%3Fixid%3DMnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%253D%26ixlib%3Drb-1.2.1%26w%3D1000%26q%3D80&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fview&tbnid=tTplitM2kjOQtM&vet=12ahUKEwiozMT59o30AhUGixoKHWyjAssQMygDegUIARDOAQ..i&docid=-UStXW0dQEx4SM&w=1000&h=667&q=images&ved=2ahUKEwiozMT59o30AhUGixoKHWyjAssQMygDegUIARDOAQ",
      title: "",
      type: "",
      desc: "",
      price: "",
      date: new Date().toLocaleString(),
      comment: 0,
      views: 0,
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Upload video " : "Edit Video";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {},
  mounted() {
    this.videos();
  },
  methods: {
    videos() {
      document.getElementById("input").addEventListener("change", function () {
        var media = URL.createObjectURL(this.files[0]);
        var video = document.getElementById("video");
        video.src = media;
        video.style.display = "block";
        video.play();
      });
    },
    editItem(item) {
      this.editedIndex = this.items.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.items.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.items.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.items[this.editedIndex], this.editedItem);
      } else {
        this.items.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>

<style scoped>
.custom__bg {
  background-color: #2b273f;
}
</style>