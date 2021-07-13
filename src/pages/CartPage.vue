<template>
  <div class="cart-alpha">
    <ul class="item-list">
      <li v-for="item in cartItems" :key="item.description">
        {{ item.type }}
        ${{ item.opts }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed:{
    cartItems(){
      return this.$store.getters.cartItems;
    }
  }
};
</script>

<style scoped>
.cart-alpha {
  display: flex;
  justify-content: center;
}
ul {
  list-style: none;
}

.item-list {
}
</style>