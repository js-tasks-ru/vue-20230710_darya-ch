import { defineComponent } from '../vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupDescription',

  props: {
    description: {
      type: String,
      required: true,
      default: ''
    }
  },

  template: `<p class="meetup-description">{{ description }}</p>`,
});
