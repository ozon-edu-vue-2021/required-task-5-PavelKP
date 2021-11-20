export const CartModule = {
  namespaced: true,
  state: () => ({
    cart: [],
  }),
  mutations: {
    addToCart: (state, product) => {
      state.cart.push({
        product,
      });
    },
  },
};
