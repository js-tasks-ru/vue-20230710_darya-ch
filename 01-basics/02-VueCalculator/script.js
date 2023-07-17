import { createApp } from './vendor/vue.esm-browser.js';

const operations = {
  sum: {
    name: 'sum',
    value: ' ➕',
    operation: (a, b) => a + b
  },
  subtract: {
    name: 'subtract',
    value: ' ➖',
    operation: (a, b) => a - b
  },
  multiply: {
    name: 'multiply',
    value: ' ✖',
    operation: (a, b) => a * b
  },
  divide: {
    name: 'divide',
    value: ' ➗',
    operation: (a, b) => a / b
  }
}

const vm = createApp({
  data() {
    return {
      operations: operations,
      firstNumber: 0,
      secondNumber: 0,
      picked: ''
    };
  },
  computed: {
    result() {
      if (!this.picked) {
        return 0;
      }

      const result = this.operations[this.picked].operation(this.firstNumber, this.secondNumber);

      return isFinite(result) ? result : 0;
    }
  }
}).mount('#app');
