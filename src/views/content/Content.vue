<template>
  <v-app class="custom__bg">
    <v-container>
      <v-row>
        <v-col cols="12" md="12">
          <div class="d-flex">
            <v-spacer></v-spacer>
            <Upload />
          </div>
        </v-col>

        <v-col cols="12" md="12">
          <MyUpload />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import Upload from "../../components/UploadDialog.vue";
import MyUpload from "../../components/MyUploadTable.vue";
export default {
  components: {
    MyUpload,
    Upload,
  },
  data: () => ({}),
};
</script>

<style scoped>
.custom__bg {
  background-color: #2b273f;
}
</style>