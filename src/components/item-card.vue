<template>
  <div class="card">
    <button @click="$emit('button-click', product)">В корзину</button>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
  },
};
</script>

<style scoped>
.card {
  border: 1px solid #e1e1e1;
  height: 400px;
  width: 260px;
  padding-top: 10px;
  border: 1px solid var(--border);
}
</style>
