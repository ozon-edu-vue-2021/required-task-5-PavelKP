<template>
  <section class="popup">
    <header>
      <slot name="header">Заголовок по умолчанию</slot>
    </header>

    <main>
      <slot name="main">Контент по умолчанию</slot>
    </main>

    <footer>
      <slot name="footer">Футер по умолчанию</slot>
      <a v-bind:href="url">Подробный заказ</a>
    </footer>
  </section>
</template>

<script>
export default {
  name: "App",
  props: {
    url: String,
  },
};
</script>

<style scoped>
.popup {
  width: 500px;
  height: 500px;
  border: 1px solid red;
  margin: 0 auto;
  margin-top: calc(100vh / 2 - 250px);
  background-color: bisque;
}
</style>
