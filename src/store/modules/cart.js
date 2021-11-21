export const CartModule = {
	namespaced: true,
	state: () => ({
		cart: {},
		ids: [],
	}),
	mutations: {
		addToCart: (state, product) => {
			const id = product.id;
			const currenCount = state.cart[id] ? state.cart[id]?.count : 0;

			state.cart = Object.assign({}, state.cart, {
				[id]: {
					product,
					count: currenCount + 1,
				},
			});

			if (!state.ids.includes(id)) {
				state.ids.push(id);
			}
		},
	},
	getters: {
		getAll: (state) => {
			return state.ids.map((id) => {
				return state.cart[id];
			});
		},
	},
};
