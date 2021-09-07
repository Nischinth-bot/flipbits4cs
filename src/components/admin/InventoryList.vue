<template>
  <div class="container">
    <div class="inventory">
      <base-spinner v-if="isLoading"> </base-spinner>
      <inventory-item
        v-for="item in shop_items"
        :key="item.key"
        :hashKey="item.key"
        :description="item.description"
        :imgLink="item.imgLink"
        :price="item.price"
        :type="item.type"
        :units="item.units"
        @inventoryChanged="inventoryUpdated = true"
      >
      </inventory-item>
    </div>
  </div>
</template>

<script>
import { getInventory } from '@/firebase';
import InventoryItem from './InventoryItem.vue';
export default {
  components: {
    InventoryItem,
  },
  data() {
    return {
      shop_items: [],
      isLoading: false,
    };
  },
  methods: {
    async loadInventory() {
      this.shop_items = await getInventory();
    },
  },
  async mounted() {
    this.isLoading = true;
    await this.loadInventory();
    this.isLoading = false;
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 2rem;
}

.inventory {
  width: 50%;
}
</style>
