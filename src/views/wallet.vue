<template>
  <v-app class="custom_bg">
    <v-container>
      <v-row>
        <v-col cols="12" md="3" class="text-xs-center text-center">
          <v-layout align-center justify-center>
            <v-img
              :src="video.poster"
              contain
              width="300"
              style="border-radius: 10px"
            ></v-img>
          </v-layout>
        </v-col>
        <v-col cols="12" md="4" class="text-xs-center text-center">
          <div>
            <p class="font-weight-bold white--text">
              <strong>Name: </strong>{{ video.name }}
            </p>
            <p class="font-weight-bold white--text">
              <strong>Description: </strong>{{ video.desc }}
            </p>
          </div>
          <paystack
            :amount="amount"
            :email="currentUser.email"
            :paystackkey="paystackkey"
            :reference="reference"
            :callback="callback"
            :close="close"
            :embed="false"
          >
            <v-btn color="primary" large> Make Payment</v-btn>
          </paystack>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script type="text/javascript">
import paystack from "vue-paystack";
import { mapGetters } from "vuex";

export default {
  components: {
    paystack,
  },
  data() {
    return {
      paystackkey: "pk_live_135b185fec3b147281fa1a8e6adc150541e218b8",
      amount: 10000,
      video: [],
    };
  },
  computed: {
    ...mapGetters(["currentUser", "isAuthenticated", "getUser"]),

    reference() {
      let text = "";
      let possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (let i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      return text;
    },
  },
  methods: {
    callback: function (response) {
      console.log(response);
    },
    close: function () {
      console.log("Payment closed");
    },
    fetchVideo() {
      let id = this.$route.params.id;
      fetch(`https://kadahive.herokuapp.com/videos/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          this.video = res.payload;

          console.log(res.payload);
        });
    },
  },

  mounted() {
    this.fetchVideo();
  },
};
</script>
<style scoped>
.custom_bg {
  background-color: #2b273f;
}
</style>