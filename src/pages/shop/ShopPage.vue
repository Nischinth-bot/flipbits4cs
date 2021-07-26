<template>
  <div class="wrapper">
    <base-spinner v-if="isLoading"> </base-spinner>
    <div v-if="ready" class="shop-items">
      <shop-item
        v-for="item in shop_items"
        :key="item.key"
        :description="item.description"
        :price="item.price"
        :type="item.type"
        :imgLink="item.imgLink"
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
  methods: {
    goToShopPage() {
      if (this.modalMode == true) {
        this.$router.push('/shop');
      }
    },
    refresh() {
      console.log(this.shop_items);
    },
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
     this.shop_items.push(inventory[item]);
    }
    this.isLoading = false;
    this.$store.dispatch('setInventory', this.shop_items);
  },

  computed: {
    ready() {
      console.log('ready - ', this.shop_items.length > 0);
      return this.shop_items.length > 0;
    },
  },
};
</script>

<style scoped>
.wrapper {
  width: 100%;
}

.banner {
  background: black;
  color: gold;
  margin-top: 5rem;
  text-align: center;
}

.spinner {
  margin-top: 50%;
}

.shop-items {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-bottom: 10%;
  padding-top: 5%;
  /* margin-left: 10%; */
  animation: fade 1s ease-in-out;
}
.shop-alpha-modal:hover {
  height: 100vh;
  width: 100vh;
  opacity: 100%;
  background: gold;
  opacity: 20%;
  cursor: pointer;
}

.shop-alpha,
.shop-alpha-modal {
  display: flex;
  overflow: auto;
}

.msg {
  color: black;
  opacity: 45%;
  text-align: center;
}
</style>
