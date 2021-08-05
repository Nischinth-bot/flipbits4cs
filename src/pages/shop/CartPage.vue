<template>
  <div class="container">
    <h1 class="banner">CART</h1>
    <div class="cart-alpha">
      <div class="empty-cart" v-if="cartItems.length === 0">
        <h2>Hmm... looks like your cart is empty</h2>
        <div class="button">
          <base-button @click="$router.push('/shop')">
            Back to Shop
          </base-button>
        </div>
      </div>
      <div class="cart-items-alpha">
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
            @updateCartCount="$emit('updateCartCount')"
          />
        </base-card>
      </div>
      <div class="button" v-if="cartItems.length > 0">
        <base-button @click="doCheckOut()"> Proceed to Checkout </base-button>
        <message-modal
          :open="showSignInDialog"
          @close="showSignInDialog = false"
        >
          <div class="warning">You need to sign in first!</div>
        </message-modal>
      </div>
    </div>
  </div>
</template>

<script>
import CartItem from '../../components/cart/CartItem.vue';
import MessageModal from '../../components/ui/wrappers/MessageModal.vue';
export default {
  data() {
    return { showSignInDialog: false };
  },
  components: { CartItem, MessageModal },
  computed: {
    cartItems() {
      return this.$store.getters.cartItems;
    },
    cartIsEmpty() {
      return this.$store.getters.cartIsEmpty;
    },
  },
  methods: {
    doCheckOut() {
      if (!this.$store.getters.isAuthenticated) {
        this.showSignInDialog = true;
        return;
      }
      this.$router.push('/checkout');
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
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
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5rem;
  padding-top: 1rem;
}

.cart-header * {
  padding: 1rem;
}

.cart-alpha .banner {
  margin: 3rem;
  width: 100%;
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
}

.button {
  justify-content: flex-end;
  margin-left: auto;
}
</style>