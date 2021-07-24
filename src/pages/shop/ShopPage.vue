<template>
  <div class="wrapper">
    <!-- <h1 v-if="modalMode != true" class="banner">CS Storefront</h1> -->
    <div
      :class="getStyle"
      @click="goToShopPage()"
      @mouseover="hovering = true"
      @mouseleave="hovering = false"
    >
      <div class="shop-items">
        <h1 class="msg" v-if="modalMode === true && hovering === true">
          GO 2 STORE
        </h1>
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
  </div>
</template>

<script>
import ShopItem from '../../components/shop/ShopItem.vue';
export default {
  props: ['modalMode'],
  emits: ['updateCartCount'],
  components: { ShopItem },
  data() {
    return {
      shop_items: [],
      hovering: false,
    };
  },
  methods: {
    goToShopPage() {
      if (this.modalMode == true) {
        this.$router.push('/shop');
      }
    },
  },
  mounted() {
    this.shop_items = this.$store.getters.inventory;
  },
  computed: {
    getStyle() {
      return this.modalMode == true ? 'shop-alpha-modal' : 'shop-alpha';
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
