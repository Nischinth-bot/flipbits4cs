<template>
  <div class="shop-item">
    <img :src="getImgUrl(imgLink)" />
    <div class="item-desc">
      {{ description }}
    </div>
    <div class="cart-wishlist">
      <button class="brown-button" @click="showItemDialog = true">
        Add to Cart
      </button>
      <base-modal
        title="Please Confirm"
        :open="showItemDialog"
        @close="showItemDialog = false"
      >
        <clothes-form
          v-if="type === 'clothing'"
          :description="description"
          :price="price"
          :imgLink="imgLink"
          @itemsAddedToCart="$emit('updateCartCount')"
          @close="showItemDialog = false"
        ></clothes-form>
        <misc-form
          v-else-if="type === 'misc'"
          :description="description"
          :imgLink="imgLink"
          :price="price"
          @itemsAddedToCart="$emit('updateCartCount')"
          @close="showItemDialog = false"
        ></misc-form>
        <accessory-form
          v-else-if="type === 'accessory'"
          :description="description"
          :imgLink="imgLink"
          :price="price"
          @itemsAddedToCart="$emit('updateCartCount')"
          @close="showItemDialog = false"
        ></accessory-form>
      </base-modal>
      <div @click="wishlist()" :class="heartColor">
        &hearts;
        <message-modal
          :open="showWishListedDialog"
          @close="showWishListedDialog = false"
        >
          <div style="color: green">Your item has been wishlisted.</div>
        </message-modal>
      </div>
      <div class="price">${{ price }}</div>
    </div>
  </div>
</template>

<script>
import ClothesForm from '../ui/forms/ClothesForm.vue';
import MiscForm from '../ui/forms/MiscForm.vue';
import MessageModal from '../../components/ui/wrappers/MessageModal.vue';
import AccessoryForm from '../ui/forms/AccessoryForm.vue';

export default {
  emits: ['updateCartCount'],
  components: { ClothesForm, MiscForm, MessageModal, AccessoryForm },
  props: ['imgLink', 'price', 'description', 'type'],
  data() {
    return {
      heartColor: 'black',
      showItemDialog: false,
      showWishListedDialog: false,
      wishlisted: false,
    };
  },
  methods: {
    changecolor() {
      if (this.heartColor === 'red') {
        this.heartColor = 'black';
        return;
      }
      this.heartColor = 'red';
      return;
    },
    wishlist() {
      this.changecolor();
      if (this.wishlisted === false) {
        this.wishlisted = true;
        this.showWishListedDialog = true;
        setTimeout(() => {
          this.showWishListedDialog = false;
        }, 1000);
      } else {
        this.wishlisted = false;
        return;
      }
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
  width: 25%;
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

.black {
  margin: 1rem;
  color: black;
}

.red {
  margin: 1rem;
  color: red;
  /* animation: heart-swell 0.75s ease-in-out; */
}

.shop-item .cart-wishlist {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 1rem;
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
