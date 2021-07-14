export default {
  cartItems(state) {
    return state.cartItems;
  },
  numCartItems(state) {
    return state.cartItems.length;
  },
  cartIsEmpty(state) {
    return state.cartItems.length === 0;
  }
};
