// onclick
$('#random').on('click', () => {});

// filter
let threads = GmailApp.search('Kindle');
threads.filter((mail) => {
  mail.moveToTrash();
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
