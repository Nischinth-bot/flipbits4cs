<template>
  <div class="cart-alpha">
    <ul class="item-list">
      <li v-for="item in cartItems" :key="item.description">
        {{ item.description }}
        ${{ item.price }}
        {{ item.units }}
        {{ item.color }}
        {{ item.size }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartItems: [],
    };
  },
  mounted() {
    this.cartItems = this.$store.state.cart_stuff.cartItems;
  },
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

.item-list{
    
}

</style>