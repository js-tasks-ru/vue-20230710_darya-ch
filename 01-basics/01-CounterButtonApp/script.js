import { createApp } from './vendor/vue.esm-browser.js';

const vm = createApp({
  data() {
    return {
      counter: 0
    };
  },
  methods: {
    count () {
      return this.counter++;
    }
  }
}).mount('#app');
