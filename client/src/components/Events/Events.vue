<template>
  <v-layout class="mt-5" justify-center>
    <v-flex xs12 lg10>
      <v-container grid-list-lg>
        <v-layout wrap>
          <v-flex xs12 sm12 md6 lg4 v-for="event in allEvents" :key="event._id">
            <v-hover v-slot:default="{ hover }">
              <v-card class="mt-4 mx-auto" :elevation="hover ? 12 : 2">
                <v-img :src="event.image" height="250px"></v-img>

                <v-card-title>
                  <div>{{ event.title }}</div>
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
    <create></create>
  </v-layout>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Create from "@/components/Events/Create";
export default {
  computed: mapGetters(["allEvents"]),
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    ...mapActions(["fetchEvents"])
  },
  components: { Create }
};
</script>
