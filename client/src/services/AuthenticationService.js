import Api from "@/services/Api";

export default {
  registration(credentials) {
    return Api().post("auth/registration", credentials);
  },
  login(credentials) {
    return Api().post("auth/login", credentials);
  }
};
