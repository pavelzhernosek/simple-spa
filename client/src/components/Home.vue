<template>
  <div>
    <v-container>
      <v-layout>
        <v-flex xs12>
          <v-carousel
            interval="16000"
            cycle
            height="500px"
            hide-delimiter-background
            show-arrows-on-hover
          >
            <v-carousel-item
              v-for="event in allEvents"
              :src="event.image"
              :key="event._id"
            >
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12 md6 lg4 xl4 v-for="event in allEvents" :key="event._id">
          <v-hover v-slot:default="{ hover }">
            <v-card :elevation="hover ? 12 : 2" class="mx-auto">
              <v-img class="white--text" height="200px" :src="event.image">
              </v-img>
              <v-card-title class="align-end fill-height">{{
                event.title
              }}</v-card-title>
              <v-card-text>
                <span class="text--primary">
                  <span>{{ event.description }}</span>
                </span>
              </v-card-text>

              <v-card-actions>
                <v-btn text :to="'event/' + event._id">Open </v-btn>
                <v-btn text color="purple">
                  Edit
                </v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import EventsService from "@/services/EventsService";
import Panel from "@/components/Panel";
export default {
  computed: mapGetters(["allEvents"]),
  methods: {
    ...mapActions(["fetchEvents"])
  },
  async mounted() {
    this.fetchEvents();
  },
  components: {
    Panel
  }
};
</script>

<style scoped>
.home-page {
  max-width: 80%;
}
</style>