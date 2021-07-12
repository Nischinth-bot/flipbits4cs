<template>
  <div class="shop-item">
    <img :src="getImgUrl()" />
    <div class="item-desc">
      {{ description }}
    </div>
    <div class="cart-wishlist">
      <base-button @click="showItemModal()"> Add to Cart </base-button>
      <base-modal :open="showDialog" @close="closeItemModal()">
        Please Confirm
      </base-modal>
      <div @click="wishlist()" :class="color">&hearts;</div>
      <div class="price">$ {{ price }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['itemName', 'imgLink', 'price', 'description'],
  data() {
    return {
      color: 'heart-black',
      showDialog: false,
    };
  },
  methods: {
    getImgUrl() {
      return require('@/assets/' + this.imgLink);
    },
    changecolor() {
      if (this.color === 'heart-red') {
        // console.log('Chaning to black');
        this.color = 'heart-black';
        return;
      }
      // console.log('Chaning to red');
      this.color = 'heart-red';
      return;
    },
    wishlist() {
      this.changecolor();
    },
    showItemModal() {
      this.showDialog = true;
    },
    closeItemModal() {
      console.log("Closing dialogue");
      this.showDialog = false;
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

.shop-item .price {
  margin-top: 5%;
}
</style>
