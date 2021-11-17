import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: () => ({
    productList: [
      {
        id: 1,
      },
      {
        id: 2,
      },
    ],
    cart: [],
  }),
  mutations: {
    addToCart: (state, product) => {
      state.cart.push({
        product,
      });
    },
  },
});
