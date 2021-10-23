<template>
  <v-app class="custom_col">
    <v-container>
      <v-row>
        <v-col cols="12" md="12">
          <Create />
        </v-col>
        <v-col cols="12" md="12">
          <Channels />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>



<script>
import Channels from "../../components/Channels.vue";
import Create from "../../components/UploadDialog.vue";
export default {
  components: {
    Create,
    Channels,
  },
};
</script>

<style scoped>
.custom_col {
  background-color: #2b273f;
}
</style>