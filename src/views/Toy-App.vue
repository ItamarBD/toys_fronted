<template>
  <div class="Toy-App">
    <div @click="changeName">click here</div>
    {{getUser}}
    <img alt="Vue logo" src="../assets/logo.png">
    <ToyList msg="Welcome to Mister Toy App" :toysToDisplay="getToysForDisplay" />
    <!-- <ToyList :toysToDisplay="getToysForDisplay" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import ToyList from "@/components/ToyList.vue";

export default {
  name: "Toy-App",
  components: {
    ToyList
  },
  methods: {
    changeName() {
      this.$store.dispatch("setName", "yossi");
    }
  },
  created() {
   this.$store.dispatch({type: 'loadToys'}); 
  },
  computed: {
    getToysForDisplay(){
      return this.$store.getters.getToysForShow;
    },
    getUser() {
      return this.$store.getters.getName;
    }
  }
};
</script>
