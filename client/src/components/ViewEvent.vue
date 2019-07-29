<template>
  <v-layout justify-center>
    <v-flex xs12 sm8 lg6 xl4>
      <panel>
        <v-card>
          <v-img width="100%" height="600px" :src="event.event_image"></v-img>
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
      </panel>
    </v-flex>
  </v-layout>
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
    const eventId = this.$store.state.route.params.eventId;
    this.event = (await this.axios.get(`/events/${eventId}`)).data;
  }
};
</script>

<style scoped></style>
