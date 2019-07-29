<template>
  <div>
    <v-container class="pt-0" fluid>
      <v-layout row>
        <v-flex xs12>
          <v-carousel
            interval="16000"
            cycle
            height="500px"
            hide-delimiter-background
            show-arrows-on-hover
          >
            <v-carousel-item
              v-for="event in events"
              :src="event.event_image"
              :key="event._id"
            >
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 xl3 v-for="event in events" :key="event._id">
          <v-hover v-slot:default="{ hover }">
            <v-card :elevation="hover ? 12 : 2" class="mx-auto">
              <v-img
                class="white--text"
                height="200px"
                :src="event.event_image"
              >
              </v-img>
              <v-card-title class="align-end fill-height">{{
                event.event_title
              }}</v-card-title>
              <v-card-text>
                <span class="text--primary">
                  <span>{{ event.event_description }}</span>
                </span>
              </v-card-text>

              <v-card-actions>
                <v-btn
                  @click="
                    navigateTo({
                      name: 'event',
                      params: {
                        eventId: event._id
                      }
                    })
                  "
                  text
                  >Open
                </v-btn>
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
import Panel from "@/components/Panel";
export default {
  data() {
    return {
      events: null
    };
  },
  components: {
    Panel
  },
  async mounted() {
    this.events = (await this.axios.get("/events")).data;
  }
};
</script>

<style scoped></style>
