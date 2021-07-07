<template>
  <div class="header">
    <div id="company-name">
      <h1><strong> FlipBits </strong></h1>
    </div>
    <div class="cart">
      <i
        id="cart"
        class="fa fa-shopping-cart"
        style="font-size: 24px; color: gold"
      ></i>
      <strong> {{ this.cart.itemCount }} </strong>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      cart: {
        itemCount: 0,
        items: [],
        empty: true,
      },
    };
  },
};
</script>

<style>
body {
  font-family: Tahoma, sans-serif;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  background: black;
  color: gold;
  padding: 10px 10px;
}

.cart {
  display: flex;
  justify-content: space-between;
  width: 65px;
}
</style>

