<template>
  <div class="shop-item">
    <img :src="getImgUrl()" />
    <div class="item-desc">
      {{ description }}
    </div>
    <div class="cart-wishlist">
      <base-button @click="showItemModal()"> Add to Cart </base-button>
      <base-modal
        title="Please Confirm"
        :open="showDialog"
        @close="closeItemModal()"
      >
        <clothes-form
          @itemsAddedToCart="updateCart"
          @close="closeItemModal()"
        ></clothes-form>
      </base-modal>
      <div @click="wishlist()" :class="heartColor">&hearts;</div>
      <div class="price">$ {{ price }}</div>
    </div>
  </div>
</template>

<script>
import ClothesForm from '../ui/forms/ClothesForm.vue';
export default {
  emits: ['updateCartCount'],
  components: { ClothesForm },
  props: ['imgLink', 'price', 'description'],
  data() {
    return {
      heartColor: 'heart-black',
      showDialog: false,
    };
  },
  methods: {
    getImgUrl() {
      return require('@/assets/' + this.imgLink);
    },
    changecolor() {
      if (this.heartColor === 'heart-red') {
        // console.log('Chaning to black');
        this.heartColor = 'heart-black';
        return;
      }
      // console.log('Chaning to red');
      this.heartColor = 'heart-red';
      return;
    },
    updateCart(newItems) {
      const numItems = newItems.units;
      var i = 0;
      while (i < numItems) {
        this.$store.state.cart_stuff.cartItems.push({
          description: this.description,
          price: this.price,
          img: this.getImgUrl(),
        });
        i += 1;
      }
      this.$emit('updateCartCount');
      // console.log("Here");
      // console.log(this.$store.state.cart_stuff.cartItems);
    },
    wishlist() {
      this.changecolor();
    },
    showItemModal() {
      this.showDialog = true;
    },
    closeItemModal() {
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
  /* animation: heart-swell 0.75s ease-in-out; */
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

@keyframes heart-swell {
  0% {
    font-size: inherit;
  }
  100% {
    font-size: 25px;
  }
}
</style>
