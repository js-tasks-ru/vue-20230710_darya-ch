import { defineComponent, callWithAsyncErrorHandling } from '../vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import MeetupView from '../../06-MeetupView/components/MeetupView.js';
import { fetchMeetupById } from '../meetupService.js';

export default defineComponent({
  name: 'PageMeetup',

  components: {
    UiAlert,
    UiContainer,
    MeetupView
  },

  props: {
    meetupId: {
      type: Number,
      required: true,
      default: 1
    }
  },

  data() {
    return {
      meetup: null,
      error: 'error',
      isLoading: true
    };
  },

  watch: {
    meetupId () {
      this.getMeetup();
    }
  },

  mounted () {
    this.getMeetup();
  },

  methods: {
    getMeetup () {
      this.isLoading = true;

      fetchMeetupById(this.meetupId)
        .finally(() => this.isLoading = false)
        .then(data => this.meetup = data)
        .catch((error) => {
          this.error = error.message;
          this.meetup = null;
          this.isLoading = false;
        })
    }
  },


  template: `
    <div class="page-meetup">

      <MeetupView
        v-if="meetup && !isLoading"
        :meetup="meetup"
      />

      <UiContainer v-else-if="isLoading">
        <UiAlert>Загрузка...</UiAlert>
      </UiContainer>

      <UiContainer v-else >
        <UiAlert>{{ error }}</UiAlert>
      </UiContainer>
    </div>`,
});
