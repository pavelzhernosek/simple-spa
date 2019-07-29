<template>
  <v-layout justify-center>
    <v-flex xs12>
      <panel title="event">
        <v-layout>
          <v-flex xs6>
            <div class="event-title">
              {{ event.event_title }}
            </div>
            <div class="event-location">
              {{ event.event_location }}
            </div>
            <div class="event-date">
              {{ event.event_start_date }}
            </div>
          </v-flex>

          <v-flex xs6>
            <div class="event-image">
              <img :src="event.event_image" />
            </div>
          </v-flex>
        </v-layout>
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

<style scoped>
.event-image {
  width: 70%;
}
</style>
