<template>
  <div class="shop-item">
    <img :src="getImgUrl()" />
    <div class="cart-wishlist">
      <base-button> Add to Cart </base-button>
      <div @click="changecolor()" :class="color">&hearts;</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['itemName', 'imgLink', 'price'],
  data() {
    return {
      color: 'heart-black',
    };
  },
  computed: {},
  mounted() {},
  methods: {
    getImgUrl() {
      return require('@/assets/' + this.imgLink);
    },
    changecolor() {
      if (this.color === 'heart-red') {
        console.log('Chaning to black');
        this.color = 'heart-black';
        return;
      }
      console.log('Chaning to red');
      this.color = 'heart-red';
      return;
    },
  },
};
</script>

<style scoped>
.shop-item {
  display: flex;
  background: white;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem;
  box-shadow: gray;
}

.shop-item h2 {
  color: black;
}

.shop-item :hover {
  cursor: pointer;
  /* animation: zoom-shopitem 0.5s forwards; */
}

img {
  width: 500px;
  height: 500px;
}

.heart-black {
  margin-top: 5%;
  color: black;
}

.heart-red {
  margin-top: 5%;
  color: red;
}

.shop-item .cart-wishlist {
  display: flex;
  justify-content: space-around;
  width: 50%;
  margin: 5%;
}
</style>
