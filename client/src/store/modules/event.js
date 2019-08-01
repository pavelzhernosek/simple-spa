import EventsService from "@/services/EventsService";
export default {
  state: {
    events: []
  },
  actions: {
    async fetchEvents({ commit }) {
      const events = (await EventsService.getAll()).data;
      commit("updateEvents", events);
    },
    async createEvent({ commit }, ev) {
      const event = await EventsService.create(ev);
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
