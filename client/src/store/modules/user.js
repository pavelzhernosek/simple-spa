export default {
  state: {
    session: {
      token: "",
      isUserLoggedIn: false
    },
    user: null
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      state.isUserLoggedIn = !!token;
    },
    setUser(state, user) {
      state.user = user;
    }
  },
  actions: {
    setToken({ commit }, token) {
      commit("setToken", token);
    },
    setUser({ commit }, user) {
      commit("setUser", user);
    }
  },
  getters: {
    session: state => state.session,
    // or could have both getters separated
    logged: state => state.session.isUserLoggedIn,
    token: state => state.session.token
  }
};
