<script setup>
import { fakeStoreAPI } from '../api/fakeStore';
import { onMounted, ref } from 'vue';

const products = ref(null);

onMounted(async () => {
  products.value = await fakeStoreAPI.get("/products");
});

</script>

<template>
  <article v-for="product in products?.data" :key="product.id"> <!-- toode toodete seas -->
    <img :src="product.image" alt="" >
    <h4>{{ product.title }}</h4>
    <p>{{ product.description }}</p>
    <p>Hind: {{ product.price }}</p>
  </article>
</template>