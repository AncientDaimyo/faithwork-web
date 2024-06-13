import { createStore } from 'vuex';

export default createStore({
  state: () => ({
    cartItems: JSON.parse(localStorage.getItem('cartItems')) || []
  }),
  mutations: {
    addToCart(state, item) {
      const index = state.cartItems.findIndex(i => i.id === item.id);
      if (index !== -1) {
        state.cartItems[index].quantity += 1;
      } else {
        state.cartItems.push(item);
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    removeFromCart(state, item) {
      const index = state.cartItems.findIndex(i => i.id === item.id);
      if (index !== -1) {
        state.cartItems.splice(index, 1);
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
      }
    }
  },
  actions: {
    // Другие действия, например, отправка корзины на сервер
  }
});