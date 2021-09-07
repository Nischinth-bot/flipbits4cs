<template>
  <div class="meta">
    <div class="header">
      <h1 class="banner">
        ADMIN
        <img :src="getImgUrl('admin.png')" />
      </h1>
    </div>
    <div class="container">
      <admin-dashboard @changedComponent="changeComponent"> </admin-dashboard>
      <component :is="selectedComponent"> </component>
    </div>
  </div>
</template>

<script>
import { getOrders } from '@/firebase';
import { mapGetters } from 'vuex';
import store from '@/store/index.js';
import AdminDashboard from '../../components/admin/AdminDashboard.vue';
import InventoryList from '../../components/admin/InventoryList.vue';
import InventoryForm from '../../components/ui/forms/InventoryForm.vue';
export default {
  components: {
    AdminDashboard,
    InventoryList,
    InventoryForm,
  },
  emits: ['updateCartCount'],
  data() {
    return {
      selectedComponent: 'InventoryList',
      orders: [],
      isLoading: false,
      inventoryUpdated: false,
    };
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'userId']),
  },
  methods: {
    /** Load the orders from Firebase and update the state to display a spinner. */
    async loadOrders() {
      this.orders = await getOrders();
    },
    changeComponent(arg) {
      console.log(arg);
      this.selectedComponent = arg;
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
    // console.log(this.orders);
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
  flex-direction: column;
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
