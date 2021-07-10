<template>
  <div class="shop-alpha">
    <div class="shop">
      <shop-item imgLink="burberry.png" itemName="CS T-Shirt"></shop-item>
      <shop-item imgLink="mug.png" itemName="Mug"></shop-item>
    </div>
  </div>
</template>

<script>
import ShopItem from '../components/shop/ShopItem.vue';
export default {
  components: { ShopItem },
  data() {
    return {
      shop_items: {},
    };
  },
  mounted() {},
};
</script>

<style scoped>
.shop {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 1rem;
  background: gold;
}

.shop-alpha {
  border: 1px solid black;
  background: gold;
}
</style>
