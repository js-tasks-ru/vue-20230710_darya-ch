import { createApp } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

const vm = createApp({
  data() {
    return {
      meetupId: 1,
      title: 'Test title'
    };
  },
  watch: {
    meetupId (newValue, oldValue) {
      if (newValue && newValue !== oldValue) {
        this.getTitle()
      }
    }
  },
  mounted () {
    this.getTitle()
  },
  methods: {
    async getTitle() {
      const { title } = await fetchMeetupById(this.meetupId)
      this.title = title
    }
  }
}).mount('#app');
