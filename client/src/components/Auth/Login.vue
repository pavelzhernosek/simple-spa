<template>
  <v-container>
    <v-layout class="login-field" justify-center>
      <v-flex xs12 sm8 lg6 xl4>
        <panel class="text-uppercase" title="Login field">
          <v-flex>
            <v-form
              name="events-form"
              ref="form"
              v-model="valid"
              lazy-validation
            >
              <v-text-field
                prepend-icon="mdi-account"
                name="email"
                label="Email"
                type="email"
                :rules="emailRules"
                v-model="email"
              ></v-text-field>
              <v-text-field
                id="password"
                prepend-icon="mdi-key"
                name="password"
                label="Password"
                :rules="passwordRules"
                type="password"
                v-model="password"
              ></v-text-field>
            </v-form>
            <div class="error--text">{{ error }}</div>
            <br />
            <v-btn @click="login" :disabled="!valid">
              Login
            </v-btn>
          </v-flex>
        </panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Panel from "@/components/Panel";
import AuthenticationService from "@/services/AuthenticationService";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: null,
      valid: false,
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      passwordRules: [
        v => !!v || "Password is required",
        v =>
          (v && v.length >= 6) || "Password must be equal or than 6 characters"
      ]
    };
  },
  methods: {
    async login() {
      try {
        if (this.$refs.form.validate()) {
          const user = {
            email: this.email,
            password: this.password
          };
          const response = await AuthenticationService.login(user);
          this.$store.dispatch("setToken", response.data.token);
          this.$store.dispatch("setUser", response.data.user);
          this.$router.push({
            name: "home"
          });
        }
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  },
  mounted() {},
  components: {
    Panel
  }
};
</script>

<style scoped></style>
