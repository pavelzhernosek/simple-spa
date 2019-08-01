import Api from "./Api";

export default {
  getAll() {
    return Api().get("events");
  },
  create(credentials) {
    return Api().post("events", credentials);
  }
};
