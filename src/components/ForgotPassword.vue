<template>
  <v-dialog max-width="450">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        color="primary"
        class="text-capitalize"
        small
        text
        v-bind="attrs"
        v-on="on"
        >Forgot password?</v-btn
      >
    </template>
    <template v-slot:default="dialog">
      <v-card class="pa-1">
        <v-card-text>
          <v-list-item class="px-0 py-4">
            <v-list-item-content>
              <v-list-item-title> Forgot your password? </v-list-item-title>
              <v-list-item-subtitle>
                Please enter the email you use to sign in
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-row v-if="!showSuccess">
            <v-col cols="12" md="12" class="py-0">
              <v-form @submit.prevent ref="form">
                <v-text-field
                  label="Enter your email"
                  outlined
                  color="primary"
                  hide-details
                  v-model="email"
                  :rules="[rules.required, rules.email]"
                >
                </v-text-field>
              </v-form>
            </v-col>
            <v-col cols="12" md="12">
              <v-btn
                block
                @click="resetPassword()"
                large
                :loading="loading"
                :disabled="loading"
                class="white--text text-capitalize"
                color="primary"
              >
                Request password reset
              </v-btn>
            </v-col>
            <v-col cols="12" md="12">
              <div class="d-flex align-center justify-center">
                <v-btn
                  text
                  @click="dialog.value = false"
                  color="primary"
                  class="text-capitalize"
                  small
                >
                  Back to sign in
                </v-btn>
              </div>
            </v-col>
          </v-row>
          <p v-if="errorMsg !== ''" class="error">{{ errorMsg }}</p>
          <p v-if="successMsg">
            Success! Check your mail for your password reset code.
          </p>
        </v-card-text>
      </v-card>
    </template>
  </v-dialog>
</template>
<script>
export default {
  data: () => ({
    email: "",
    loader: null,
    loading: false,
    successMsg: false,
    errorMsg: "",
    rules: {
      required: (v) => !!v || "Field is required",
      counter: (v) => (v && v.length >= 5) || "Minimum length is 6 characters",
      email: (value) => {
        const pattern =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Invalid e-mail.";
      },
    },
  }),
  methods: {
    async resetPassword() {
      this.loading = true;
      this.errorMsg = "";
      const data = {
        email: this.email,
      };
      if (this.$refs.form.validate()) {
        console.log(data)
      }
    },
  },
};
</script>