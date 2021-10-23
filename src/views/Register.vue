<template>
  <v-app class="">
    <v-row>
      <v-col cols="12" md="6">
         <v-img src="../assets/st.svg" contain height="100%" width="100%" />
      </v-col>
      <v-col cols="12" md="6">
        <v-container fill-height>
          <v-card flat width="500">
            <div class="d-flex justify-center align-center">
              <v-card-text>
                <div>
                  <p class="text-h4 mx-3 font-weight-bold">Register</p>
                </div>
                <div>
                  <p class="text-h6 mx-3 font-weight-regular grey--text">
                    Create an Account
                  </p>
                </div>

                <v-form v-model="form" ref="form">
                  <v-col cols="12" md="12">
                    <span class="text-body-1">Username</span>
                    <v-text-field
                      outlined
                      placeholder="Enter Your Username"
                      color="#2A4F66"
                      :rules="[rules.email]"
                      type="email"
                      class="mt-2"
                      v-model="email"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="12">
                    <span class="text-body-1">Email Address</span>
                    <v-text-field
                      outlined
                      placeholder="Enter Your Email Address"
                      color="#2A4F66"
                      :rules="[rules.email, rules.required]"
                      type="email"
                      class="mt-2"
                      v-model="email"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="12" class="py-0">
                    <span class="text-body-1">Password</span>
                    <v-text-field
                      outlined
                      :type="showPassword ? 'text' : 'password'"
                      class="custom__field mt-2"
                      @click:append="showPassword = !showPassword"
                      color="#2A4F66"
                      :rules="[rules.password, rules.required]"
                      append-icon="mdi-eye"
                      placeholder="Enter Your Password"
                      v-model="password"
                    ></v-text-field>
                  </v-col>
                 
                </v-form>

                <v-col cols="12" md="12">
                  <div>
                    <v-btn
                      block
                      x-large
                      large
                      :loading="signInMetaData.signInLoading"
                      :disabled="signInMetaData.signInDisabled"
                      color="primary"
                      @click="signIn()"
                      class="white--text text-capitalize px-8 mt-1"
                      elevation="3"
                    >
                      Login</v-btn
                    >
                  </div>
                </v-col>
                <v-col cols="12" md="12">
                  <div class="d-flex align-center justify-center">
                    <span class=""
                      > Have an Account?
                      <v-btn color="primary" text small to="/login"
                        >Login</v-btn
                      ></span
                    >
                  </div>
                </v-col>
              </v-card-text>
            </div>
          </v-card>

          <v-snackbar
            bottom
            color="warning"
            timeout="5000"
            v-model="signInMetaData.signInErrorSnackbar"
          >
            {{ signInMetaData.signInErrorPayload }}
          </v-snackbar>
        </v-container>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
export default {
  components: {
  },
  data: () => ({
    icon: ["mdi-facebook", "mdi-twitter", "mdi-google"],
    email: "",
    password: "",
    showPassword: "",
    form: false,
    rules: {
      email: (v) => !!(v || "").match(/@/) || "Please enter a valid email",
      length: (len) => (v) =>
        (v || "").length >= len || `Invalid character length, required ${len}`,
      required: (v) => !!v || "This field is required",
      password: (value) =>
        (value && value.length >= 6) || "Minimum length is 6 characters",
    },
  }),
  methods: {
    signIn() {
      const signInData = {
        email: this.email,
        password: this.password,
      };
      if (this.$refs.form.validate()) {
        this.$store.dispatch("SIGN_IN", signInData);
      }
    },
  },
  computed: {
    signInMetaData() {
      return "s";
    },
  },
};
</script>

<style scoped>
.custom_img {
  width: 100%;
  height: 100%;
}
.custom__bg {
  background: #fafafa;
}
.custom__text {
  font-size: 12px;
  text-decoration-line: underline;
  color: blue;
}
.custom__t {
  font-size: 11px;
}
</style>