<template>
  <div class="clothes-form">
    <ul class="form">
      <li>
        <label for="units"> Number </label>
        <div class="number-picker">
          <number-picker id="units" @update="updateUnits"></number-picker>
        </div>
      </li>
    </ul>
    <div class="buttons">
      <base-button @click="addToCartContinueShopping()">
        <div class="txt">Continue Shopping</div>
      </base-button>
      <base-button @click="addToCartContinueShoppingAndCheckout()">
        <div class="txt">Proceed to Checkout</div>
      </base-button>
    </div>
  </div>
</template>

<script>
import NumberPicker from '../utils/NumberPicker.vue';
export default {
  props: ['description', 'price', 'imgLink'],
  components: { NumberPicker },
  emits: ['itemsAddedToCart', 'close'],
  data() {
    return {
      selectedUnits: 1,
    };
  },
  methods: {
    updateUnits(newUnits) {
      this.selectedUnits = newUnits;
    },
    addToCartContinueShopping() {
      // This would be the CartItem object if this was TypeScript.
      const addedToCart = {
        type: 'misc',
        description: this.description,
        units: this.selectedUnits,
        price: this.price,
        imgLink: this.imgLink,
        opts: {
          color: '    ',
        },
      };
      //Add the CartItem object to cartItems in Vuex Store and then close the modal.
      this.$store.commit('addItemToCart', addedToCart);
      this.$emit('itemsAddedToCart');
      this.$emit('close');
    },
    addToCartContinueShoppingAndCheckout() {
      this.addToCartContinueShopping();
      this.$router.push('/checkout');
    },
  },
};
</script>

<style scoped>
.clothes-form {
  display: flex;
  height: 20rem;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
}

h3 {
  background: black;
  width: 100%;
}
.form {
  display: flex;
  list-style: none;
  flex-direction: column;
  width: 100%;
}

.form li {
  padding: 1rem;
}
.buttons {
  margin-top: 10%;
}

select,
input {
  width: 15rem;
}

.txt {
  font-size: 15px;
}
</style>
