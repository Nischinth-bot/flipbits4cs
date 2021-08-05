<template>
  <div class="container">
    <h1>Checkout</h1>
    <p v-for="item in cartItems" :key="item.key">
      <span class="checkout-item">
        <div class="img">
          <img :src="getImgUrl(item.imgLink)" />
        </div>
        {{ item.description }}
        <div class="units">
          {{ item.units }}
        </div>
        <div class="price">${{ item.units * item.price }}</div>
      </span>
    </p>
    <div class="total-price">
      <h3>Total: ${{ totalPrice }}</h3>
    </div>
  </div>
</template>

<script>
import store from '@/store/index.js';
export default {
  data() {
    return {
      totalPrice: 0,
    };
  },
  computed: {
    cartItems() {
      return this.$store.getters.cartItems;
    },
  },
  mounted() {
    for (const item of this.cartItems) {
      this.totalPrice += item.price * item.units;
    }
  },
  beforeRouteEnter(to,from,next){
    if(store.getters.isAuthenticated) next(); 
    else next('/cart');
  }
};
</script>

<style scoped>
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
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 5rem;
}

.total-price {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-left: auto;
  margin-right: 20%;
}
</style>


