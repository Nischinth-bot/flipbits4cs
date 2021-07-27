<template>
  <div class="meta">
    <div class="header">
      <h1>
        Admin
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
          @inventoryChanged="loadInventory()"
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
            <p v-if="inventoryUpdated" class="popup" style="color: green">
              YOUR ITEM HAS BEEN SUBMITTED
            </p>
            <p v-if="errorExists" class="popup" style="color: red">
              Please check all fields and try again
            </p>
          </form>
        </div>
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
      if (!this.formValid()) {
        this.errorExists = true;
        return;
      }
      const newItem = {
        description: this.desc,
        price: this.price,
        imgLink: this.imgLink,
        units: this.units,
        type: this.type,
        key: this.hashKey(this.desc),
        hashKey: this.hashKey(this.desc),
      };
      /** If somethings not truthy, show an error and return */
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

    /** Helper method to check if the update-form fields are valid. */
    formValid() {
      return !(
        this.desc === null ||
        this.price === null ||
        this.imgLink === null ||
        this.units === null ||
        this.type === null
      );
    },
  },
  /** Populate local shop_items with Firebase inventory */
  async created() {
    this.loadInventory();
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
  width: 45%;
}

.update-form {
  border: 1px solid brown;
  border-radius: 20px;
  margin-bottom: auto;
}

h2,
h1 {
  text-align: center;
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
