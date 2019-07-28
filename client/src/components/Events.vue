<template>
  <v-layout justify-center>
    <v-flex xs12 sm8 lg6 xl4>
      <panel title="My events">
        <v-btn
          slot="action"
          class="cyan"
          @click="navigateTo({ name: 'events-create' })"
          fab
          small
          dark
          absolute
          right
          middle
        >
          <v-icon>
            mdi-plus
          </v-icon>
        </v-btn>
        <v-layout column>
          <div class="pt-3" v-for="event in events" :key="event.id">
            <v-layout>
              <v-flex xs6>
                <div class="event-title">
                  {{ event.event_title }}
                </div>
                <div class="event-location">
                  {{ event.event_location }}
                </div>
                <div class="event-description">
                  {{ event.event_description }}
                  <br />
                  User Id:
                  <span
                    ><i>{{ event.event_author_id }}</i></span
                  >
                </div>
              </v-flex>
              <v-flex xs6>
                <img class="event-image" :src="event.event_image" />
              </v-flex>
            </v-layout>
          </div>
        </v-layout>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from "@/components/Panel";
export default {
  data() {
    return {
      events: null
    };
  },
  async mounted() {
    this.events = (await this.axios.get("/events")).data;
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    }
  },

  components: { Panel }
};
</script>

<style scoped></style>
