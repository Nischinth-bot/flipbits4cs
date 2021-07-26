<template>
  <div class="container">
    <div class="inventory">
      <h1>Current inventory</h1>
      <base-spinner v-if="isLoading"> </base-spinner>
      <cart-item
        v-for="item in shop_items"
        :key="item.key"
        :description="item.description"
        :imgLink="item.imgLink"
        :price="item.price"
      >
      </cart-item>
    </div>
    <div class="update-form">
      <h1>Update inventory</h1>
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
          <button>Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { addItemToInventory, getInventory } from '@/firebase';
import CartItem from '../../components/cart/CartItem.vue';
export default {
  components: {
    CartItem,
  },
  data() {
    return {
      desc: null,
      price: null,
      imgLink: null,
      units: null,
      shop_items: [],
      isLoading: false,
      inventoryUpdated: false,
    };
  },
  methods: {
    /** Construct a new object from the form and add it to Firebase inventory */
    async submitForm() {
      const newItem = {
        description: this.desc,
        price: this.price,
        imgLink: this.imgLink,
        units: this.units,
        key: this.desc,
      };
      this.isLoading = true;
      await addItemToInventory(newItem);
      this.isLoading = false;
      this.inventoryUpdated = true;
    },
  },
  /** Populate local shop_items with Firebase inventory */
  async created() {
    this.isLoading = true;
    this.shop_items = await getInventory();
    this.isLoading = false;
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
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
</style>
