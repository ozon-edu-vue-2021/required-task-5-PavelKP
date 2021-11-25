<template>
  <div class="popup-wrapper">
    <popup url="#verbose">
      <template v-slot:header>
        <h1>Детали заказа</h1>
      </template>

      <template v-slot:main>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </template>

      <template v-slot:footer>
        <button>Заказать</button>
      </template>
    </popup>
  </div>
</template>

<script>
import popup from "./popup.vue";

export default {
  name: "App",
  components: {
    popup,
  },
};
</script>

<style scoped>
.popup-wrapper {
  margin: 0 auto;
  width: 100%;
  position: fixed;
  top: 0;
  overflow: hidden;
}
</style>
