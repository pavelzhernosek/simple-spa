export default {
  state: {
    session: {
      token: null,
      isUserLoggedIn: false
    },
    user: null
  },
  mutations: {
    setToken(state, token) {
      state.session.token = token;
      state.session.isUserLoggedIn = !!token;
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
    logged: state => state.session.isUserLoggedIn,
    token: state => state.session.token,
    user: state => state.user,
    userId: state => state.user._id
  }
};
