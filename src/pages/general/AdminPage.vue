<template>
  <div class="meta">
    <div class="header">
      <h1>
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
          :hashKey="item.hashKey"
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
  </div>
</template>

<script>
import { getInventory } from '@/firebase';
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
      this.isLoading = true;
      this.shop_items = await getInventory();
      this.isLoading = false;
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
    await this.loadInventory();
    this.$emit('updateCartCount');
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
  margin-top: 3rem;
}
.container {
  display: flex;
  justify-content: space-around;
  align-items: center;
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

.header h1,
h2 {
  color: black;
  text-align: center;
  margin: 2rem;
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
</style>
