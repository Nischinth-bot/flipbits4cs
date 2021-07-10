<template>
  <div class="shop-item">
    <h2>{{ itemName }}</h2>
    <img :src="getImgUrl()">
  </div>
</template>

<script>
export default {
  props: ['itemName', 'imgLink'],
  data() {
    return {
    };
  },
  mounted() {
  },
  methods: {
    getImgUrl() {
      return require('@/assets/' + this.imgLink);
    },
  },
};
</script>

<style scoped>
.shop-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid gold;
}

.shop-item h2 {
  background: black;
}

img {
  width: 500px;
  height: 500px;
}
</style>
