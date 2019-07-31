<template>
  <v-layout class="mt-5" justify-center>
    <v-flex xs12 lg10>
      <v-btn
        slot="action"
        class="cyan"
        @click="navigateTo({ name: 'event-create' })"
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
      <v-container grid-list-lg>
        <v-layout wrap>
          <v-flex xs12 sm12 md6 lg4 v-for="event in events" :key="event._id">
            <v-hover v-slot:default="{ hover }">
              <v-card class="mt-4 mx-auto" :elevation="hover ? 12 : 2">
                <v-img :src="event.event_image" height="250px"></v-img>

                <v-card-title>
                  <div>{{ event.event_title }}</div>
                </v-card-title>

                <v-card-actions>
                  <v-btn
                    @click="
                      navigateTo({
                        name: 'event',
                        params: {
                          id: event._id
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
    </v-flex>
  </v-layout>
</template>

<script>
import EventsService from "@/services/EventsService";
export default {
  data() {
    return {
      events: null
    };
  },
  async mounted() {
    this.events = (await EventsService.getAll()).data;
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    }
  }

  // components: { Panel }
};
</script>

<style scoped>
.event-title {
  font-size: 30px;
}

.event-description {
  padding-top: 10px;
  text-align: left;
  font-size: 16px;
}

.event-location {
  font-size: 24px;
}

.event-image {
  width: 100%;
  max-height: 300px;
  margin: 0 auto;
  object-fit: cover;
}
</style>
