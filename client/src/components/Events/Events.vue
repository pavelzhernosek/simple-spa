<template>
  <v-layout>
    <v-btn bottom color="pink" dark fab fixed right @click="dialog = !dialog">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-dialog v-model="dialog" width="800px">
      <v-card>
        <v-card-title>
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
              <v-text-field
                prepend-icon="mdi-file-image"
                placeholder="Image url"
                :rules="[v => !!v || 'Image url is required']"
                v-model="event.image"
              >
              </v-text-field>
            </v-flex>
            <v-flex xs6>
              <v-select :items="items" label="Categories"></v-select>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                prepend-icon="mdi-message-text-outline"
                placeholder="Description"
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
    time: null,
    datePicker: false,
    timePicker: false,
    events: null,
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
      user_id: "5d40ba5a89bfc606d88abfa9",
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
        this.dialog = false;
        await EventsService.create(this.event);
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>

<style scoped></style>

<!--<v-layout class="mt-5" justify-center>-->
<!--  <v-flex xs12 lg10>-->
<!--    <v-btn-->
<!--      slot="action"-->
<!--      class="cyan"-->
<!--      @click="navigateTo({ name: 'event-create' })"-->
<!--      fab-->
<!--      small-->
<!--      dark-->
<!--      absolute-->
<!--      right-->
<!--      middle-->
<!--    >-->
<!--      <v-icon>-->
<!--        mdi-plus-->
<!--      </v-icon>-->
<!--    </v-btn>-->
<!--    <v-container grid-list-lg>-->
<!--      <v-layout wrap>-->
<!--        <v-flex xs12 sm12 md6 lg4 v-for="event in events" :key="event._id">-->
<!--          <v-hover v-slot:default="{ hover }">-->
<!--            <v-card class="mt-4 mx-auto" :elevation="hover ? 12 : 2">-->
<!--              <v-img :src="event.event_image" height="250px"></v-img>-->

<!--              <v-card-title>-->
<!--                <div>{{ event.event_title }}</div>-->
<!--              </v-card-title>-->

<!--              <v-card-actions>-->
<!--                <v-btn-->
<!--                  @click="-->
<!--                      navigateTo({-->
<!--                        name: 'event',-->
<!--                        params: {-->
<!--                          id: event._id-->
<!--                        }-->
<!--                      })-->
<!--                    "-->
<!--                  text-->
<!--                >Open-->
<!--                </v-btn>-->
<!--                <v-btn text color="purple">-->
<!--                  Edit-->
<!--                </v-btn>-->
<!--                <v-spacer></v-spacer>-->
<!--              </v-card-actions>-->
<!--            </v-card>-->
<!--          </v-hover>-->
<!--        </v-flex>-->
<!--      </v-layout>-->
<!--    </v-container>-->
<!--  </v-flex>-->
<!--</v-layout>-->
