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
      <inventory-form
        class="inv-form"
        @inventoryChanged="this.inventoryUpdated = true"
      >
      </inventory-form>
    </div>
  </div>
</template>

<script>
import { getInventory } from '@/firebase';
import { mapGetters } from 'vuex';
// import store from '@/store/index.js';
import InventoryForm from '../../components/ui/forms/InventoryForm.vue';
import InventoryItem from '../../components/admin/InventoryItem.vue';
export default {
  components: {
    InventoryItem,
    InventoryForm,
  },
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
    /** Construct a new object from the form and add it to Firebase inventory */
    async loadInventory() {
      this.isLoading = true;
      this.shop_items = await getInventory();
      this.isLoading = false;
    },
    /** Helper method to check if the update-form fields are valid. */
  },
  /** Populate local shop_items with Firebase inventory */
  async created() {
    this.loadInventory();
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
  mounted() {
    // console.log(store.auth.state);
    console.log(this.$store.state.auth);
    if(this.$store.state.auth.isAuthenticated && this.$store.state.auth.userId === 'nischinth.murari@gmail.com'){
      console.log("Authenticated!");
    }
    // else next('/restricted');
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
