<template>
  <div class="page-wrapper">
    <item-card
      v-for="product in productList"
      :key="product.id"
      :product="product"
      @button-click="addToCart"
    />
  </div>
</template>

<script>
import itemCard from "../components/item-card.vue";
import { mapState } from "vuex";

// https://random-data-api.com/api/food/random_food?size=30

export default {
  name: "App",
  components: {
    "item-card": itemCard,
  },
  computed: {
    ...mapState(["productList"]),
  },
  methods: {
    addToCart(product) {
      this.$store.commit("addToCart", product);
    },
  },
};
</script>

<style scoped>
.page-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, 260px);
  grid-gap: 5px;
  padding-top: 20px;
}
</style>
