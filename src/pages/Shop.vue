<template>
  <div class="shop-alpha">
    <div class="shop">
      <shop-item
        v-for="item in shop_items"
        :key="item.key"
        :imgLink="item.link"
        :itemName="item.name"
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
        key: i,
        price: 25,
      });
      i += 1;
    }
    while (i < 2) {
      this.shop_items.push({
        link: 'mug.png',
        name: 'CS Department Mug',
        key: i,
        price: 15,
      });
      i += 1;
    }
  },
};
</script>

<style scoped>
.shop {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 10%;
}

.shop-alpha {
  border: 1px solid black;
  height: 100%;
  width: 100%;
}

.sidebar{
  font-size: 100px;
  color:black;
}
</style>
