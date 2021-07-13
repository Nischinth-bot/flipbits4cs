export default {
  addItemToCart(state, item) {
    state.cartItems.push(item);
    state.numItems += 1;
  },
  removeItemFromCart(state, desc) {
    for (const item of state.cartItems) {
      console.log(item);
      console.log(desc === item.description);
      if (item.description === desc) {
        const idx = state.cartItems.indexOf(item);
        console.log(idx);
        state.cartItems.splice(idx, 1);
      }
      console.log(state.cartItems);
      state.numItems -= 1;
    }
  }
};
