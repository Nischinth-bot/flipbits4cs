<template>
  <div class="container">
    <ul class="switch">
      <li
        class="dashboard-item"
        @click="select('InventoryList')"
        :class="getClass('InventoryList')"
      >
        View Inventory
      </li>
      <li
        class="dashboard-item"
        @click="select('InventoryForm')"
        :class="getClass('InventoryForm')"
      >
        Add Inventory
      </li>
      <li
        class="dashboard-item"
        @click="select('OrderList')"
        :class="getClass('OrderList')"
      >
        Open Orders
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  emits: ['changedComponent'],
  data() {
    return {
      selectedItem: 'InventoryList',
    };
  },
  methods: {
    getClass(arg) {
      if (arg === this.selectedItem) {
        return 'green';
      }
      return 'dashboard-item';
    },
    select(arg) {
      this.selectedItem = arg;
      this.$emit('changedComponent', arg);
    },
  },
};
</script>

<style scoped>
.switch {
  display: flex;
  font-size: 20px;
  list-style: none;
}
.dashboard-item {
  color: gold;
  background: black;
  border: 1px solid gold;
  padding: 5px;
  cursor: pointer;
}

.green {
  color: rgb(47, 190, 47);
  background: black;
  border: 1px solid gold;
  padding: 5px;
  cursor: pointer;
}
</style>
