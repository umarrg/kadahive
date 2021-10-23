<template >
  <v-app class="custom_col">
    <v-container>
      <v-row>
        <v-col cols="12" md="12">
          <div class="my-6">
            <span class="text-h4 white--text mt-2">My profile</span>
          </div>
          <v-card width="100%" height="400">
            <v-card-title>
              <v-row>
                <v-col cols="12" md="12">
                  <v-card flat>
                    <v-card-title>
                      <v-avatar size="100">
                        <v-img src="../../assets/im.jpeg"> </v-img>
                      </v-avatar>
                      <v-spacer></v-spacer>
                      <v-dialog v-model="dialog" persistent width="600px">
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn color="primary" dark v-bind="attrs" v-on="on">
                            EDIT PROFILE
                          </v-btn>
                        </template>
                        <v-card dark>
                          <v-card-title>
                            <span class="text-h5">Edit Profile</span>
                            <v-spacer></v-spacer>
                            <v-icon @click="dialog = false">mdi-close</v-icon>
                          </v-card-title>

                          <v-divider></v-divider>
                          <v-card-text>
                            <v-row class="mt-5">
                              <v-col cols="12" md="12" class="py-0">
                                <v-text-field
                                  label="Name"
                                  required
                                  outlined
                                  v-model="name"
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12" md="12" class="py-0">
                                <v-text-field
                                  label="Email"
                                  required
                                  outlined
                                  v-model="email"
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12" md="12" class="py-0">
                                <v-text-field
                                  label="Country"
                                  required
                                  outlined
                                  v-model="country"
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12" md="12" class="py-0">
                                <v-text-field
                                  label="security Number"
                                  required
                                  outlined
                                  v-model="number"
                                ></v-text-field>
                              </v-col>
                            </v-row>
                          </v-card-text>
                          <v-divider></v-divider>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="secondary" @click="save()">
                              save
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </v-card-title>
                  </v-card>
                  <div class="text-body-1">
                    <p>Name: Abdullah Gumi</p>
                    <p>Email: Abdullahgumi77@gmail.com</p>
                    <p>Country: Nigeria</p>
                    <p>security Number: 7789900</p>
                  </div>
                </v-col>
              </v-row>
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    dialog: false,
    name: "",
    email: "",
    number: "",
    country: "",
  }),
};
</script>

<style scoped>
.custom_col {
  background-color: #2b273f;
}
</style>