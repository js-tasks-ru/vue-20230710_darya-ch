import { createApp } from './vendor/vue.esm-browser.js';

const operations = [
  {
    name: 'sum',
    value: ' ➕',
    operation: (a, b) => +a + +b
  },
  {
    name: 'subtract',
    value: ' ➖',
    operation: (a, b) => a - b
  },
  {
    name: 'multiply',
    value: ' ✖',
    operation: (a, b) => a * b
  },
  {
    name: 'divide',
    value: ' ➗',
    operation: (a, b) => a / b
  }
]

const vm = createApp({
  data() {
    return {
      result: 0
    };
  },
  created() {
    this.operations = operations
  },
  methods: {
    calculate (operation) {
      const result = operation(this.$refs.firstNumber.value, this.$refs.secondNumber.value)

      return this.result = isFinite(result) ? result : 0
    }
  }
}).mount('#app');
