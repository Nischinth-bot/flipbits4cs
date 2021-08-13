<template>
  <div class="wrapper">
    <h1 class="banner">STOREFRONT</h1>
    <base-spinner v-if="isLoading"> </base-spinner>
    <div v-if="ready" class="shop-items">
      <shop-item
        v-for="item in shop_items"
        :key="item.key"
        :description="item.description"
        :price="item.price"
        :type="item.type"
        :imgLink="item.imgLink"
        @updateCartCount="$emit('updateCartCount')"
      >
      </shop-item>
    </div>
  </div>
</template>

<script>
import { getInventory } from '@/firebase';
import ShopItem from '../../components/shop/ShopItem.vue';

export default {
  props: ['modalMode'],
  emits: ['updateCartCount'],
  components: { ShopItem },
  data() {
    ShopItem;
    return {
      shop_items: [],
      isLoading: false,
      dataReady: true,
    };
  },
  /**
   * Load the Firebase inventory locally into shop_items
   * Store shop_items in Vuex.
   */
  async mounted() {
    this.isLoading = true;
    const inventory = await getInventory().catch((error) => {
      console.log('Error @ ShopPage.mounted()', error);
    });
    for (const item in inventory) {
      this.shop_items.push(inventory[item]); // Gotta use push for making changes to arrays rerender lists in Vue.
    }
    this.isLoading = false;
    this.$store.dispatch('setInventory', this.shop_items);
    this.$emit('updateCartCount');
  },

  computed: {
    ready() {
      return this.shop_items.length > 0;
    },
  },
};
</script>

<style scoped>
.wrapper {
  width: 100%;
}

.spinner {
  margin-top: 25%;
}

.shop-items {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  /* margin-left: 10%; */
}

.shop-alpha {
  display: flex;
  overflow: auto;
}

.msg {
  color: black;
  opacity: 45%;
  text-align: center;
}
</style>
