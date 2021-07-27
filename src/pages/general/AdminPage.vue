<template>
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
      >
      </inventory-item>
    </div>
    <div class="update-form">
      <h2>Update inventory</h2>
      <div class="form">
        <form @submit.prevent="submitForm()">
          <label for="desc"> Item description </label>
          <input type="string" id="desc" v-model="desc" />
          <label for="price"> Item Price </label>
          <input type="string" id="price" v-model="price" />
          <label for="img"> Item img </label>
          <input type="string" id="img" v-model="imgLink" />
          <label for="units"> Item units remaining </label>
          <input type="number" id="units" v-model="units" />
          <label for="type"> Item type </label>
          <input type="string" id="type" v-model="type" />
          <button>Submit</button>
          <h3 v-if="inventoryUpdated" class="popup" style="color: green">
            YOUR ITEM HAS BEEN SUBMITTED
          </h3>
          <h3 v-if="errorExists" class="popup" style="color: red">
            Please check all fields and try again
          </h3>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { addItemToInventory, getInventory } from '@/firebase';
import InventoryItem from '../../components/admin/InventoryItem.vue';
export default {
  components: {
    InventoryItem,
  },
  data() {
    return {
      desc: null,
      price: null,
      imgLink: null,
      units: null,
      type: null,
      shop_items: [],
      isLoading: false,
      inventoryUpdated: false,
      errorExists: false,
    };
  },
  methods: {
    /** Construct a new object from the form and add it to Firebase inventory */
    async submitForm() {
      this.errorExists = false;
      const newItem = {
        description: this.desc,
        price: this.price,
        imgLink: this.imgLink,
        units: this.units,
        type: this.type,
        key: this.hashKey(this.desc),
      };
      /** If somethings not truthy, show an error and return */
      for (const key in newItem) {
        if (!newItem[key]) {
          this.errorExists = true;
          return;
        }
      }
      this.isLoading = true;
      await addItemToInventory(newItem);
      this.isLoading = false;

      /** Successful update results in confirmatory message that goes away after 3 seconds  */
      this.inventoryUpdated = true;
      await setTimeout(() => {
        this.inventoryUpdated = false;
      }, 3000);

      /** Call loadInventory() to refresh shop_items */
      await this.loadInventory();
    },
    async loadInventory() {
      this.isLoading = true;
      this.shop_items = await getInventory();
      this.isLoading = false;
    },
  },
  /** Populate local shop_items with Firebase inventory */
  async created() {
      this.loadInventory();
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.inventory {
  width: 45%;
}

.update-form {
}

h2 {
  color: black;
  margin: 2rem;
}

form {
  display: flex;
  font-size: 25px;
  flex-direction: column;
  margin: 1rem;
}

button {
  margin: 1rem;
}

.popup {
  animation: fade 0.5s ease-in-out;
}
</style>
