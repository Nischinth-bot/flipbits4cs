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
        <div class="total-price">${{ item.units * item.price }}</div>
      </span>
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    cartItems() {
      return this.$store.getters.cartItems;
    },
  },
};
</script>

<style scoped>
.checkout-item {
  width: 700px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid black;
  padding: 20px;
  margin: 10px;
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
}
</style>


