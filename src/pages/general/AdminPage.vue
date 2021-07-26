<template>
  <div class="container">
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
</template>

<script>
import { addItemToInventory } from '@/firebase';
export default {
  data() {
    return {
      desc: null,
      price: null,
      imgLink: null,
      units: null,
    };
  },
  methods: {
    /** Construct a new object from the form and addd it to Firebase inventory */
    async submitForm() {
      const newItem = {
        description: this.desc,
        price: this.price,
        imgLink: this.imgLink,
        units: this.units,
        key: this.desc,
      };
      await addItemToInventory(newItem);
    },
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
