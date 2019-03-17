<template>
  <div class="toy">
    <h3>{{toy.name}}</h3>
    <h5>{{toy}}</h5>
    <router-link :to="/toy/ + toy._id">Toy Details</router-link>
    <div class="in-stock" v-if="toy.inStock">In Stock</div>
  </div>
</template>

<script>

export default {
    name: 'ToyPreview',
    props:{
        toy: Object
    }
}
</script>