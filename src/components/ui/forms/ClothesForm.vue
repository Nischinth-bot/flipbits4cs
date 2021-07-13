<template>
  <div class="clothes-form">
    <ul class="form">
      <li>
        <label for="color"> Choose a color </label><br />
        <select id="color" name="color" v-model="selectedColor">
          <option value="Black">Black</option>
          <option value="Purple">Purple</option>
          <option value="Burgundy">Burgundy</option>
        </select>
      </li>
      <li>
        <label for="size"> Choose a size </label><br />
        <select id="size" name="size" v-model="selectedSize">
          <option value="Small">S</option>
          <option value="Medium">M</option>
          <option value="XLarge">XL</option>
          <option value="XXLarge">XXL</option>
        </select>
      </li>
      <li>
        <label for="units"> Number </label>
        <div class="number-picker">
          <number-picker id="units" @update="updateUnits"></number-picker>
        </div>
      </li>
    </ul>
    <div class="buttons">
      <base-button>
        <div class="txt" @click="addToCartContinueShopping()">
          Continue Shopping
        </div>
      </base-button>
      <base-button> <div class="txt">Proceed to Checkout</div> </base-button>
    </div>
  </div>
</template>

<script>
import BaseButton from '../BaseButton.vue';
import NumberPicker from '../utils/NumberPicker.vue';
export default {
  components: { BaseButton, NumberPicker },
  props: ['description', 'price'],
  emits: ['itemsAddedToCart', 'close'],
  data() {
    return {
      selectedColor: 'Black',
      selectedUnits: 1,
      selectedSize: 'Small',
    };
  },
  methods: {
    updateUnits(newUnits) {
      this.selectedUnits = newUnits;
    },
    addToCartContinueShopping() {
      // This would be the CartItem object if this was TypeScript.
      const addedToCart = {
        description: this.description,
        units: this.selectedUnits,
        price: this.price,
        opts: {
          color: this.selectedColor,
          size: this.selectedSize,
        },
      };
      //Add the CartItem object to cartItems in Vuex Store and then le
      this.$store.state.cart_stuff.cartItems.push(addedToCart);
      this.$emit('itemsAddedToCart');
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
.clothes-form {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  /* border: 1px solid black; */
}

h3 {
  background: black;
  width: 100%;
}
.form {
  display: flex;
  list-style: none;
  flex-direction: column;
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
