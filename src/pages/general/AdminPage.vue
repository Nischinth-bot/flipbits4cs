<template>
  <div class="meta">
    <div class="header">
      <h1 class="banner">
        ADMIN
        <img :src="getImgUrl('admin.png')" />
      </h1>
    </div>
    <div class="container">
      <div class="inventory">
        <h2>Current inventory</h2>
        <base-spinner v-if="isLoading"> </base-spinner>
        <inventory-item
          v-for="item in shop_items"
          :key="item.key"
          :description="item.description"
          :imgLink="item.imgLink"
          :price="item.price"
          :type="item.type"
          :units="item.units"
          @inventoryChanged="inventoryUpdated = true"
        >
        </inventory-item>
      </div>
      <inventory-form class="inv-form"> </inventory-form>
    </div>
    <div class="orders">
      <h2>Open Orders</h2>
      <ul>
        <li v-for="order in orders" :key="order.key" ><span> {{ order.key }} </span> </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getInventory, getOrders } from '@/firebase';
import { mapGetters } from 'vuex';
import { inject, toRefs } from 'vue';
import store from '@/store/index.js';
import InventoryForm from '../../components/ui/forms/InventoryForm.vue';
import InventoryItem from '../../components/admin/InventoryItem.vue';
export default {
  components: {
    InventoryItem,
    InventoryForm,
  },
  emits: ['updateCartCount'],
  data() {
    return {
      shop_items: [],
      orders: [],
      isLoading: false,
      inventoryUpdated: false,
    };
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'userId']),
  },
  methods: {
    /** Load the inventory from Firebase and update the state to display a spinner. */
    async loadInventory() {
      this.shop_items = await getInventory();
    },

    async loadOrders() {
      this.orders = await getOrders();
    },
  },
  watch: {
    inventoryUpdated(is, was) {
      if (is && !was) {
        console.log('Grabbing inventory');
        this.loadInventory();
        this.inventoryUpdated = false;
      }
    },
  },
  beforeRouteEnter(to, from, next) {
    if (
      store.getters.isAuthenticated &&
      store.getters.userId === 'nischinth.murari@gmail.com'
    ) {
      next();
    } else {
      next('/restricted');
    }
  },
  async mounted() {
    this.isLoading = true;
    await this.loadInventory();
    await this.loadOrders();
    this.isLoading = false;
    this.$emit('updateCartCount');
    console.log(this.orders);
  },
  setup(props) {
    const { isSignIn } = toRefs(props);
    const Vue3GoogleOauth = inject('Vue3GoogleOauth');
    const handleClickLogin = () => {};
    return {
      Vue3GoogleOauth,
      handleClickLogin,
      isSignIn,
    };
  },
};
</script>

<style scoped>
.meta {
  margin-top: 1rem;
  height: 100%;
}
.container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 2rem;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
}

.inventory {
  width: 50%;
}

.inv-form {
  width: 25%;
}

button {
  margin: 1rem;
  background: brown;
  color: white;
  padding: 15px;
}

button:hover {
  cursor: pointer;
  background: rgb(133, 25, 25);
}

.popup {
  font-size: 15px;
  animation: fade 0.5s ease-in-out;
}

.orders {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
