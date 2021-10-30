<template>
  <v-app class="custom_bg">
    <v-container>
      <v-row>
        <v-col cols="12" md="12">
          <paystack
            :amount="amount"
            :email="email"
            :paystackkey="paystackkey"
            :reference="reference"
            :callback="callback"
            :close="close"
            :embed="false"
          >
            <v-btn color="success"> Make Payment</v-btn>
          </paystack>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script type="text/javascript">
import paystack from "vue-paystack";
export default {
  components: {
    paystack,
  },
  data() {
    return {
      paystackkey: "pk_live_135b185fec3b147281fa1a8e6adc150541e218b8",
      email: "umarabubakarfta@gmail.com",
      amount: 10000,
    };
  },
  computed: {
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
  },
};
</script>
<style scoped>
.custom_bg {
  background-color: #2b273f;
}
</style>