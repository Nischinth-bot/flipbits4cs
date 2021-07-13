<template>
  <div class="shop-alpha">
    <!-- <div class="sidebar">
      <h1>Sidebar</h1>
      </div> -->
    <div class="shop-items">
      <shop-item
        v-for="item in shop_items"
        :key="item.key"
        :imgLink="item.link"
        :price="item.price"
        :description="item.description"
        :type="item.type"
        @updateCartCount="$emit('updateCartCount')"
      >
      </shop-item>
    </div>
  </div>
</template>

<script>
import ShopItem from '../components/shop/ShopItem.vue';
export default {
  emits: ['updateCartCount'],
  components: { ShopItem },
  data() {
    return {
      shop_items: [],
    };
  },
  mounted() {
    this.shop_items = this.$store.getters.inventory;

    console.log(this.$store.getters);
  },
};
</script>

<style scoped>
.shop-items {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-bottom: 10%;
  padding-top: 5%;
  margin-left: 10%;
  animation: fade 1s ease-in-out;
}

.shop-alpha {
  border: 1px solid black;
  display: flex;
}
/* 
.sidebar{
  display: flex;
  justify-content: center;
  flex-direction: row;
  color:black;
  width: 15%;
  border: 1px solid black;
} */
</style>
