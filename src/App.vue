<script setup>
import { fakeStoreAPI } from '../api/fakeStore';
import { onMounted, ref } from 'vue';

const products = ref(null);

onMounted(async () => {
  products.value = await fakeStoreAPI.get('/products');
});

</script>

<template>

</template>