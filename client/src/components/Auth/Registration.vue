<template>
  <v-layout justify-center>
    <v-flex xs12 sm8 lg6 xl4>
      <panel title="Registration field">
        <v-flex>
          <v-form name="events-form" ref="form" v-model="valid" validation>
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
              prepend-icon="mdi-lock-outline"
              name="password"
              label="Password"
              :rules="passwordRules"
              type="password"
              v-model="password"
            ></v-text-field>
            <v-text-field
              id="confirmPassword"
              prepend-icon="mdi-lock-outline"
              name="confirm-password"
              label="Confirm Password"
              :rules="confirmPasswordRules"
              type="password"
              v-model="confirmPassword"
            ></v-text-field>
          </v-form>
          <br />
          <v-btn color="primary" @click="" :disabled="!valid">
            Login
          </v-btn>
        </v-flex>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from "@/components/Panel";
export default {
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      valid: false,
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      passwordRules: [
        v => !!v || "Password is required",
        v =>
          (v && v.length >= 6) || "Password must be equal or than 6 characters"
      ],
      confirmPasswordRules: [
        v => !!v || "Password is required",
        v => v === this.password || "Password should match"
      ]
    };
  },
  components: {
    Panel
  }
};
</script>

<style scoped></style>
