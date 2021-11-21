<template>
  <div class="page-wrapper">
    <ul>
      <li v-for="cartItem in getAll" :key="cartItem.product.id">
        {{ cartItem.product.dish }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    // cart: Cart,
    // "profuct-list": ProductList,
  },
  computed: {
    ...mapGetters("cart", ["getAll"]),
  },
};
</script>

<style scoped>
.page-wrapper {
  padding-top: 20px;
  padding-bottom: 80px;
}
</style>
