<template>
  <v-layout justify-center row wrap>
    <v-flex xs12 sm10 lg8 xl6>
      <panel title="Create event">
        <v-flex class="pl-2 pr-2">
          <v-form ref="form" v-model="valid" validation>
            <v-text-field
              name="event_title"
              label="Event title"
              type="text"
              :rules="[v => !!v || 'Title is required']"
              required
              v-model="event.event_title"
            ></v-text-field>

            <v-textarea
              name="event_description"
              label="Description"
              :rules="[v => !!v || 'Description is required']"
              auto-grow
              v-model="event.event_description"
            ></v-textarea>

            <v-text-field
              name="event_start_date"
              label="Date starts"
              type="text"
              placeholder="YYYY-MM-DD"
              :rules="[v => !!v || 'Date is required']"
              required
              v-model="event.event_start_date"
            ></v-text-field>

            <v-text-field
              name="event_start_time"
              label="Time starts"
              type="text"
              placeholder="HH:MM"
              :rules="[v => !!v || 'Time is required']"
              required
              v-model="event.event_start_time"
            ></v-text-field>

            <v-text-field
              name="event_image"
              label="Image link"
              type="text"
              v-model="event.event_image"
            ></v-text-field>

            <v-text-field
              name="event_location"
              label="Location"
              placeholder="City, Street, house"
              type="text"
              :rules="[v => !!v || 'Location is required']"
              required
              v-model="event.event_location"
            ></v-text-field>

            <v-text-field
              name="event_cost"
              label="Cost"
              placeholder="BYR"
              type="number"
              v-model="event.event_cost"
            ></v-text-field>
          </v-form>

          <v-layout row>
            <v-flex xs12>
              <v-switch
                color="primary"
                v-model="event.event_promo"
                :label="'Add to promo'"
              ></v-switch>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12>
              <v-switch
                color="primary"
                v-model="event.event_is_free"
                :label="'Free entry?'"
              ></v-switch>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-spacer></v-spacer>
            <v-btn @click="createEvent" class="success" :disabled="!valid"
              >Create event
            </v-btn>
          </v-layout>
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
      event: {
        event_title: null,
        event_author_id: null,
        event_start_time: null,
        event_start_date: null,
        event_description: null,
        event_promo: null,
        event_image: null,
        event_location: null,
        event_cost: null,
        event_is_free: null
      },
      valid: false
    };
  },
  methods: {
    async createEvent() {
      try {
        if (this.$refs.form.validate()) {
          await this.axios.post("/events", this.event);
          this.$router.push({
            name: "events"
          });
        }
      } catch (e) {
        console.log(e);
      }
    }
  },
  components: { Panel }
};
</script>

<style scoped></style>
