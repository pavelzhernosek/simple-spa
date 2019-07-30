<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <v-card v-if="event">
          <v-img :src="event.event_image" height="300"></v-img>
          <v-card-text>
            <h1 class="text--primary">{{ event.event_title }}</h1>
            <p>{{ event.event_description }}</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="warning" text>Edit</v-btn>
            <v-btn class="success">Buy</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Panel from "@/components/Panel";

export default {
  components: { Panel },
  data() {
    return {
      event: null
    };
  },
  async mounted() {
    const eventId = this.$store.state.route.params.id;
    this.event = (await this.axios.get(`/events/${eventId}`)).data;
  }
};
</script>

<style scoped></style>
