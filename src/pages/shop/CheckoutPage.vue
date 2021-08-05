<template>
  <div class="container">
    <h1 class="banner">CHECKOUT</h1>
    <div class="checkout-items">
      <base-card>
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
          @updateCartCount="doUpdate()"
        />
      </base-card>
    </div>
    <div class="total-price">
      <h3>Total: ${{ totalPrice }}</h3>
    </div>
  </div>
</template>

<script>
import store from '@/store/index.js';
import CartItem from '../../components/cart/CartItem.vue';
export default {
  components: {
    CartItem,
  },
  data() {
    return {
      totalPrice: 0,
    };
  },
  methods: {
    doUpdate() {
      this.calculateCartTotal();
      this.$emit('updateCartCount');
    },
    calculateCartTotal() {
      this.totalPrice = 0;
      for (const item of this.cartItems) {
        this.totalPrice += item.price * item.units;
      }
    },
  },
  computed: {
    cartItems() {
      return this.$store.getters.cartItems;
    },
  },
  mounted() {
    this.calculateCartTotal();
  },
  /**
   * You can enter into Checkout only if you are authenticated.
   */
  beforeRouteEnter(to, from, next) {
    if (store.getters.isAuthenticated) next();
    else next('/cart');
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.checkout-item {
  width: 700px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  margin: 10px;
}
h1 {
  margin-bottom: 3rem;
}
img {
  width: 100px;
  height: 100px;
}
.total-price {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-left: auto;
  margin-right: 20%;
}
</style>


