export default {
  state: {
    user: null,
    token: null,
    isUserLoggedIn: false
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
    getUser(state) {
      return state.user;
    },
    isUserLoggedIn(state) {
      return state.token !== null;
    },
    getUserId(state) {
      return state.user.id;
    }
  }
};
