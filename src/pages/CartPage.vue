<template>
  <div class="container">
    <div class="cart-alpha">
      <h1>Your Cart</h1>
      <div class="empty-cart" v-if="cartItems.length === 0">
        <h2>Hmm... looks like your cart is empty</h2>
        <div class="button">
          <base-button @click="$router.push('/shop')">
            Back to Shop
          </base-button>
        </div>
      </div>
      <!-- <div class="cart-header">
      <h3 class="name">Item Name</h3>
      <h3 class="desc">Description</h3>
      <h3 class="number">Units</h3> -->
      <!-- <h3 class="price">Price</h3>
      <h3 class="total">Total</h3> -->
      <!-- </div> -->
      <div class="cart-items-alpha">
        <cart-item
          class="cart-items"
          v-for="item in cartItems"
          :key="item.key"
          :key__="item.key"
          :description="item.description"
          :opts="item.opts"
          :price="item.price"
          :units="item.units"
          :imgLink="item.imgLink"
          :type="item.type"
          @updateCartCount="$emit('updateCartCount')"
        />
      </div>
      <div class="button" v-if="cartItems.length > 0">
        <base-button> Proceed to Checkout </base-button>
      </div>
    </div>
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
    cartIsEmpty() {
      return this.$store.getters.cartIsEmpty;
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  width: 100%;
  background: white;
}

.cart-items-alpha {
  display: flex;
  flex-direction: column;
}

.cart-items {
  height: 120px;
}

.cart-items .button {
  justify-content: flex-end;
  align-items: flex-end;
}
.cart-alpha {
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5rem;
  padding-top: 1rem;
  animation: fade 1s ease-in-out;
}

.cart-header * {
  padding: 1rem;
}

ul {
  list-style: none;
}

h1 {
  text-align: center;
}

.empty-cart h2 {
  margin: 1rem;
}
.empty-cart {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;
  width: 500px;
  animation: fade 1s ease-in-out;
}

.button {
  margin-top: 3rem;
  margin-left: auto;
}
</style>