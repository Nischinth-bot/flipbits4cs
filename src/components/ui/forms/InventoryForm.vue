<template>
  <div class="update-form">
    <h2>Update inventory</h2>
    <div>
      <form @submit.prevent="submitForm()" class="form">
        <label for="desc"> Item description </label>
        <input type="string" id="desc" v-model.trim="desc" />
        <label for="price"> Item Price </label>
        <input type="string" id="price" v-model.trim="price" />
        <label for="img"> Item img </label>
        <input type="string" id="img" v-model.trim="imgLink" />
        <label for="units"> Item units remaining </label>
        <input type="number" id="units" v-model.number="units" />
        <label for="type"> Item type </label>
        <input type="string" id="type" v-model.trim="type" />
        <button>Submit</button>
        <div v-if="inventoryUpdated" class="popup" style="color: green">
          YOUR ITEM HAS BEEN SUBMITTED
        </div>
        <div v-if="errorExists" class="popup" style="color: red">
          Please check all fields and try again
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { addItemToInventory } from '@/firebase';
export default {
  emits: ['inventoryChanged'],
  data() {
    return {
      desc: null,
      price: null,
      imgLink: null,
      units: null,
      type: null,
      inventoryUpdated: false,
      errorExists: false,
    };
  },
  methods: {
    formValid() {
      return !(
        this.desc === null ||
        this.price === null ||
        this.imgLink === null ||
        this.units === null ||
        this.type === null
      );
    },
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
        key: Date.now(),
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

      /** Emit inventoryChanged to refresh shop_items */
      this.$emit('inventoryChanged');
    },
  },
};
</script>


<style scoped>
.update-form {
  border: 1px solid brown;
  border-radius: 20px;
  margin-bottom: auto;
  color: black;
  margin-top: 2rem;
}

.form {
  display: flex;
  font-size: 25px;
  flex-direction: column;
  margin: 1rem;
}

button {
  color: white;
  background: brown;
  border: 1px solid black;
  border-radius: 25px;
  font-size: 15px;
  margin: 2rem;
}

button:hover{
    cursor: pointer;
    background: rgb(135, 28, 28);
}

h2{
    text-align: center;
    margin: 2rem;
}
</style>