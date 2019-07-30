import axios from "axios";
export default {
  state: {
    events: []
  },
  actions: {
    async axiosEvents({ commit }) {
      const events = (await axios.get("/events")).data;
      commit("updateEvents", events);
    },
    async createEvent({ commit }, ev) {
      const event = (await axios.post("/events", ev)).data;
      commit("addEvent", event);
    }
  },
  mutations: {
    updateEvents(state, events) {
      state.events = events;
    },
    addEvent(state, event) {
      state.events.push(event);
    }
  },
  getters: {
    allEvents(state) {
      return state.events;
    },
    promoEvents(state) {
      return state.events.filter(ev => (ev = ev.event_promo));
    }
  }
};
