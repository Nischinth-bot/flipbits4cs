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
      <div class="right">
        <div class="total-price">
          <h3>Total: ${{ totalPrice }}</h3>
        </div>
        <div class="buttons">
          <base-button v-if="cartItems.length > 0" @click="doConfirmOrder()">
            Confirm Order
          </base-button>
          <base-button v-else @click="$router.push('/shop')">
            Back To Shop
          </base-button>
        </div>
      </div>
    </div>
    <base-spinner v-if="isLoading"> </base-spinner>
  </div>
</template>

<script>
import store from '@/store/index.js';
import CartItem from '../../components/cart/CartItem.vue';
import { addOrderToQueue } from '@/firebase.js';
import BaseSpinner from '../../components/ui/wrappers/BaseSpinner.vue';
export default {
  components: {
    CartItem,
    BaseSpinner,
  },
  data() {
    return {
      totalPrice: 0,
      isLoading: false,
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
    async doConfirmOrder() {
      const order = {
        key: Date.now(),
        email: this.$store.getters.userId,
        date: new Date(),
        order: {
          ...this.cartItems,
        },
      };

      console.log(order);
      this.isLoading = true;
      await addOrderToQueue(order);
      this.isLoading = false;
      this.$store.commit('refreshCart');
      this.calculateCartTotal();
      this.$emit('updateCartCount');
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

.right {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
  height: 6rem;
  width: 100%;
}


</style>


