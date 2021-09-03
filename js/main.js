https://mitsuruog.github.io/javascript-style-guide/

// onclick
$('#btn').on('click', () => {
  console.log('click btn');
});

// filter
const price = [100, 500, 1000];
price.filter((value) => {
  console.log(value);
});

// Vue
new Vue({
  el: '#app',
  data() {
    return {
      name: '太郎',
      age: 1,
    };
  },
  created() {
    console.log('created');
  },
  mounted() {
    console.log('mounted');
  },
  methods: {
    add() {
      this.age++;
      console.log('add');
    },
  },
  computed: {
    now() {
      return this.age * 2;
    },
  },
  watch: {
    firstName(newValue, oldValue) {
      console.log(newValue, oldValue);
    },
  },
});
