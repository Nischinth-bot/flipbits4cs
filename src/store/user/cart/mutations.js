export default {
  addItemToCart(state, item) {
    state.cartItems.push(item);
    state.numItems += 1;
  },
  removeItemFromCart(state, key) {
    for (const item of state.cartItems) {
      if (item.key === key) {
        const idx = state.cartItems.indexOf(item);
        state.cartItems.splice(idx, 1);
        state.numItems -= 1;
        return;
      }
    }
  },
  refreshCart(state) {
    state.cartItems = [];
  }
};
