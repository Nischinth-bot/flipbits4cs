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
        :itemName="item.name"
        :description="item.description"
      >
      </shop-item>
    </div>
  </div>
</template>

<script>
import ShopItem from '../components/shop/ShopItem.vue';
export default {
  components: { ShopItem },
  data() {
    return {
      shop_items: [],
    };
  },
  mounted() {
    var i = 0;
    while (i < 1) {
      this.shop_items.push({
        link: 'burberry.png',
        name: 'CS T-Shirt',
        description: 'App State Unisex M/F Black Computer Science T-shirt',
        key: i,
        price: 25,
      });
      i += 1;
    }
    while (i < 2) {
      this.shop_items.push({
        link: 'mug.png',
        name: 'CS Department Mug',
        description: 'App State FlipBits White Coffee Mug',
        key: i,
        price: 15,
      });
      i += 1;
    }
  },
};
</script>

<style scoped>
.shop-items {
  display: flex;
  flex-direction: row;
  flex-wrap:wrap;
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
