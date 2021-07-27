<template>
  <div class="container">
    <div class="delete">
      <button @click="deleteSelf()">Delete</button>
      <!-- <base-dialog :open="showDialog" @close="showDialog = false">
      </base-dialog> -->
    </div>
    <div class="headers">
      <div class="header-item">Pic</div>
      <div class="header-item">Desc</div>
      <div class="header-item">Units</div>
      <div class="header-item">Type</div>
      <div class="header-item">Price</div>
    </div>
    <div class="inv-items">
      <img class="inv-item" :src="getImgUrl(imgLink)" />
      <div class="inv-item">{{ description }}</div>
      <div class="inv-item">{{ units }}</div>
      <div class="inv-item">{{ type }}</div>
      <div class="inv-item">{{ price }}</div>
    </div>
  </div>
</template>

<script>
import { removeItemFromInventory } from '@/firebase';
export default {
  props: ['description', 'type', 'price', 'units', 'imgLink', 'hashKey'],
  emits: ['inventoryChanged'],
  data() {
    return {
      showDialog: false,
    };
  },
  methods: {
    async deleteSelf() {
      this.showDialog = true;
      console.log('Hashkey...', this.hashKey);
      await removeItemFromInventory(this.hashKey);
      this.$emit('inventoryChanged');
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 2rem;
}
.headers {
  display: flex;
  justify-content: space-around;
  text-align: center;
  width: 100%;
}
.header-item {
  width: 20%;
  font-size: 25px;
  border: 1px solid black;
}
.inv-items {
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid black;
}
.inv-item {
  width: 20%;
  font-size: 15px;
  text-align: center;
}
img {
  width: 25%;
  height: 25%;
}

.delete {
  margin-left: auto;
}

button {
  background: brown;
  border: 1px solid black;
  border-radius: 5px;
  border-bottom: none;
  color: white;
  font-size: 12px;
  padding: 12px;
}

button:hover {
  cursor: pointer;
  background: rgb(133, 26, 26);
}
</style>