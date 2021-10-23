<template>
  <v-app class="custom_col">

      <v-container>
          <v-row>
              <v-col cols="12" md="12">
                  <Create />

              </v-col>
          </v-row>
      </v-container>
      
      
      
       </v-app>
</template>



<script>
import Create from "../components/UploadDialog.vue";
export default {
  components: {
    Create,
  },
};
</script>

<style scoped>
.custom_col {
  background-color: #2b273f;
}
</style>