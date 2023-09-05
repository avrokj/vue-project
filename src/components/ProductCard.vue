<script setup>
defineProps({
  product: Object,
}); // avab objektid {}
</script>

<template>
  <article class="product-card">
    <img :src="product.image" alt="" >
    <h4>{{ product.title }}</h4>    
    <p>Hind: {{ product.price }}</p>
    <p>{{ product.description }}</p>
  </article>
</template>

<style>
  .product-card {
    display: grid;
    gap: 1rem;
  }

  .product-card img {
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: contain;
  }
</style>