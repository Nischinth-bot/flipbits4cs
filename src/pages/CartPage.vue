<template>
  <div class="cart-alpha">
    <div class="cart-header">
      <h3 class="name">Item Name</h3>
      <h3 class="desc">Description</h3>
      <h3 class="number">Units</h3>
      <h3 class="price">Price</h3>
      <h3 class="total">Total</h3>
    </div>
    <cart-item
      v-for="item in cartItems"
      :key="item.description"
      :description="item.description"
      :opts="item.opts"
      :price="item.price"
      :units="item.units"
    />
  </div>
</template>

<script>
import CartItem from '../components/cart/CartItem.vue';
export default {
  components: { CartItem },
  computed: {
    cartItems() {
      return this.$store.getters.cartItems;
    },
  },
};
</script>

<style scoped>
.cart-alpha {
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-left:auto;
  margin-right:auto;
  padding-top: 1rem;
  border: 1px solid gold;
}

.cart-header {
  display: flex;
  justify-content: space-evenly;
  background: black;
  color: gold;
}

.cart-header * {
  padding: 1rem;
}

ul {
  list-style: none;
}

.item-list {
}
</style>