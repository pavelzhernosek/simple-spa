<template>
  <v-layout>
    <v-btn bottom color="pink" dark fab fixed right @click="dialog = !dialog">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-dialog v-model="dialog" width="800px">
      <v-card>
        <v-card-title class="title headline text-uppercase">
          Create event
        </v-card-title>
        <v-container grid-list-sm>
          <v-layout wrap>
            <v-flex xs12>
              <v-text-field
                prepend-icon="mdi-clipboard-text"
                placeholder="Title*"
                :rules="[v => !!v || 'Title is required']"
                required
                v-model="event.title"
              ></v-text-field>
            </v-flex>
            <v-flex xs6>
              <v-file-input
                :rules="rules"
                accept="image/png, image/jpeg, image/bmp"
                placeholder="Pick an image"
                prepend-icon="mdi-camera"
              ></v-file-input>
            </v-flex>
            <v-flex xs6>
              <v-select :items="items" label="Categories"></v-select>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                prepend-icon="mdi-message-text-outline"
                placeholder="Description*"
                v-model="event.description"
              ></v-text-field>
            </v-flex>
            <v-flex xs6>
              <v-dialog
                ref="datePicker"
                v-model="datePicker"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                full-width
                max-width="290px"
                min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="event.start_date"
                    label="Date"
                    persistent-hint
                    prepend-icon="mdi-calendar"
                    @blur="date = parseDate(event.start_date)"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="date"
                  no-title
                  @input="datePicker = false"
                ></v-date-picker>
              </v-dialog>
            </v-flex>
            <v-flex xs6>
              <v-dialog
                ref="timePicker"
                v-model="timePicker"
                :close-on-content-click="false"
                :nudge-right="40"
                :return-value.sync="event.start_time"
                transition="scale-transition"
                offset-y
                full-width
                max-width="290px"
                min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="event.start_time"
                    label="Time"
                    prepend-icon="mdi-clock"
                    readonly
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-time-picker
                  v-model="event.start_time"
                  format="24hr"
                  full-width
                  @click:minute="$refs.timePicker.save(event.start_time)"
                ></v-time-picker>
              </v-dialog>
            </v-flex>
          </v-layout>
        </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="dialog = false">Cancel </v-btn>
          <v-btn text @click="create">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import EventsService from "@/services/EventsService";
export default {
  data: vm => ({
    date: new Date().toISOString().substr(0, 10),
    rules: [
      value =>
        !value ||
        value.size < 2000000 ||
        "Avatar size should be less than 2 MB!"
    ],
    time: null,
    datePicker: false,
    timePicker: false,
    items: [
      "Seminars and Conferences",
      "Trade Shows",
      "Executive Retreats and Incentive Programs"
    ],
    dialog: false,
    valid: false,
    event: {
      title: null,
      start_time: null,
      start_date: vm.formatDate(new Date().toISOString().substr(0, 10)),
      description: null,
      // this.$store.state.auth.user._id,
      user_id: "",
      promo: null,
      image: null,
      location: "Minsk",
      cost: null,
      is_free: null
    }
  }),

  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date);
    }
  },
  watch: {
    date(val) {
      this.event.start_date = this.formatDate(this.date);
    }
  },
  methods: {
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${month}-${day}-${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split("-");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    },
    async create() {
      try {
        const event = await EventsService.create(this.event);
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>

<style scoped></style>
