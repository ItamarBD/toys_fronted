<template>
  <div v-if="toyToDisplay">
    <h1>Toy Details</h1>
    {{toyToDisplay}}
    <br>
    <h1>Name: {{toyToDisplay.name}}</h1>
    <h2>Price: {{toyToDisplay.price}}</h2>
    <h2>Type: {{toyToDisplay.type}}</h2>
    <h2>Created At: {{toyToDisplay.createdAt}}</h2>
    <div class="in-stock" v-if="toyToDisplay.inStock">Instock!</div>
    <button @click="goBackToToys">Back to Toys</button>
  </div>
</template>

<script>
export default {
  name: "Toy-Details",
  data() {
    return {
      toy: null
    };
  },
  components: {},
  methods: {
    goBackToToys() {
      this.$router.push("/");
    }
  },
  created() {
    const toyId = this.$route.params.toyId;
    console.log("toyId", toyId);
    this.$store.dispatch({ type: "loadToy", toyId });
    console.log("111111111111111");
  },
  computed: {
    toyToDisplay() {
      return this.$store.state.currToy;
    }
  }
};
</script>
