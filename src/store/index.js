import Vue from "vue";
import Vuex from "vuex";
import router from "../router/index";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: localStorage.getItem("token") || null,
    user: JSON.parse(localStorage.getItem("user")) || null,
    isUserLoggedIn: localStorage.getItem("token") || false,
    signIn: {
      signInLoading: false,
      signInDisabled: false,
      signInErrorSnackbar: false,
      signInErrorPayload: null,
      signInSuccessSnackbar: false,
      signInSuccessPayload: null,
    },


  },
  getters: {
    getToken: (state) => state.token,
    isAuthenticated: (state) => state.isUserLoggedIn,
    currentUser: (state) => state.user,
    getData: (state) => state.organisation,


  },
  mutations: {
    SET_DATA(state, organisation) {
      state.organisation = organisation;
    },

    setToken(state, token) {
      state.token = token;
      if (token) {
        state.isUserLoggedIn = true;
      } else {
        state.isUserLoggedIn = false;
      }
    },
    loginUser(state, userData) {
      state.token = userData.token;
      state.user = userData.user;
    },

    signOut(state) {
      state.user = null;
      state.token = null;
      state.refreshToken = null;
      localStorage.clear();
    },
    startLoader(state) {
      state.signIn.signInLoading = true;
      state.signIn.signInDisabled = true;
    },
    stopLoader(state) {
      state.signIn.signInLoading = false;
      state.signIn.signInDisabled = false;
    },

    signInError(state, error) {
      state.signIn.signInErrorSnackbar = true;
      state.signIn.signInErrorPayload = error;
    },

    signInSuccess(state, payload) {
      state.signIn.signInSuccessSnackbar = true;
      state.signIn.signInSuccessPayload = payload;
    },
    signUpSuccess(state, payload) {
      state.signIn.signInSuccessSnackbar = true;
      state.signIn.signInSuccessPayload = payload;
    },
  },
  actions: {
    setToken({ commit }, token) {
      commit("setToken", token);
      localStorage.setItem("token", token);
    },

    // fetchData({ commit }) {
    //   return fb.organisationCollection
    //     .doc(this.state.user.uid)
    //     .get()
    //     .then((snapshot) => {
    //       commit("SET_DATA", snapshot.data());
    //       console.log(snapshot.data());
    //     })

    //     .catch((error) => console.log("Error>>>", error));
    // },


    SIGN_UP({ commit }, authData) {
      const data = {
        username: authData.username,
        email: authData.email,
        password: authData.password,
        userType: authData.userType,

      }
      commit('startLoader')
      fetch('https://kadahive.herokuapp.com/api/v1/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((r) => r.json())
        .then((response) => {
          if (response.status === 'failed') {
            commit('signInError', response)
            commit('stopLoader')
          } else {
            commit('registerUser', { user: response })
            router.push("/login")
            commit('SignUpSuccessful')
            commit('stopLoader')
          }
        })
        .catch((error) => {
          console.log('Error>>>>>>>>>>>>>', error)
          commit('signUpError', error)
          commit('stopLoader')
        })
    },


    SIGN_IN({ commit }, authData) {
      commit('startLoader')
      fetch('https://kadahive.herokuapp.com/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: authData.email,
          password: authData.password,
        }),
      })
        .then((r) => r.json())
        .then((response) => {
          if (response.status === 'failed') {
            commit('stopLoader')
            commit('signInError', response.message)
          } else {
            const { token, user } = response.payload
            commit('loginUser', {
              token: token,
              user: user,
            })
            localStorage.setItem('token', response.payload.token)
            localStorage.setItem('user', JSON.stringify(response.payload.user))
            router.push("/");
            commit('stopLoader')
          }
        })
        .catch((error) => {
          console.log('Error>>>', error)
          commit('signInError', error)
          commit('stopLoader')
        })
    },

    logout({ commit }) {
      commit("user", {});
      router.push("/login");
      (this.state.user = null), localStorage.clear();
    },
  },

  modules: {},
});