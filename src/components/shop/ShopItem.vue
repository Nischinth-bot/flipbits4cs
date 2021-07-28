<template>
  <div class="shop-item">
    <img :src="getImgUrl(imgLink)" />
    <div class="item-desc">
      {{ description }}
    </div>
    <div class="cart-wishlist">
      <button @click="showItemModal()">Add to Cart</button>
      <base-modal
        title="Please Confirm"
        :open="showDialog"
        @close="closeItemModal()"
      >
        <clothes-form
          v-if="type === 'clothing'"
          :description="description"
          :price="price"
          :imgLink="imgLink"
          @itemsAddedToCart="$emit('updateCartCount')"
          @close="closeItemModal()"
        ></clothes-form>
        <misc-form
          v-else-if="type === 'misc'"
          :description="description"
          :imgLink="imgLink"
          :price="price"
          @itemsAddedToCart="$emit('updateCartCount')"
          @close="closeItemModal()"
        ></misc-form>
      </base-modal>
      <div @click="wishlist()" :class="heartColor">&hearts;</div>
      <div class="price">${{ price }}</div>
    </div>
  </div>
</template>

<script>
import ClothesForm from '../ui/forms/ClothesForm.vue';
import MiscForm from '../ui/forms/MiscForm.vue';

export default {
  emits: ['updateCartCount'],
  components: { ClothesForm, MiscForm },
  props: ['imgLink', 'price', 'description', 'type'],
  data() {
    return {
      heartColor: 'heart-black',
      showDialog: false,
    };
  },
  methods: {
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
  border: 2px gold solid;
  border-radius: 22px;
  width: 30%;
  padding: 0.5rem;
  /* border:2px solid gold; */
}

.shop-item h2 {
  color: black;
}

.shop-item :hover {
  cursor: pointer;
  /* animation: zoom-shopitem 0.5s forwards; */
}

img {
  width: 150px;
  height: 150px;
}

.heart-black {
  margin: 1rem;
  color: black;
}

.heart-red {
  margin: 1rem;
  color: red;
  /* animation: heart-swell 0.75s ease-in-out; */
}

.shop-item .cart-wishlist {
  display: flex;
  justify-content: space-around;
  margin: 5%;
}

.shop-item .price {
  margin-top: 5%;
}

button {
  color: white;
  background: brown;
  width: 100%;
  text-align: center;
  margin: 1rem;
  padding:0.25rem;
}

button:hover {
  background: rgb(123, 29, 29);
  cursor: pointer;
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
