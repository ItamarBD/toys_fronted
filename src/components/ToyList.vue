<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
   
    <ToyPreview v-for="toy in toysToDisplay" :key="toy._id" :toy="toy"/>

  </div>
</template>

<script>
import ToyPreview from './ToyPreview.vue'

export default {
  name: 'ToyList',
  components: {
    ToyPreview
  },
  props: {
    msg: String,
    toysToDisplay:Array
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
