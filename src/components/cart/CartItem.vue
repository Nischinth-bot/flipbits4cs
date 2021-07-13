<template>
  <div class="cart-item-alpha">
    <div class="cart-item">
      <div class="description">
        {{ description }}
      </div>
      <div class="opts">
        <li v-for="opt in opts" :key="opt">
          {{ opt }}
        </li>
      </div>
      <div class="units">
        {{ units }}
      </div>
      <!-- <div class="cart-item-price">${{ price }}</div>
      <div class="total">${{ total }}</div> -->
    </div>
  </div>
</template>

<script>
// import NumberPicker from '../ui/utils/NumberPicker.vue';
export default {
  props: ['description', 'opts', 'price', 'units'],
  computed: {
    total() {
      console.log(this.price * this.units);
      return this.price * this.units;
    },
  },
};
</script>

<style scoped>
.cart-item-alpha {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  /* align-items: center; */
  border: 1px solid black;
}

.cart-item {
  display: flex;
  font-size: 20px;
  justify-content: space-around;
  margin: 1rem;
  background: rgb(51, 49, 49);
}

.cart-item * {
  width: 20%;
  text-align: center;
}

.cart-item .description {
  width: 35%;
}

.opts {
  display: flex;
  flex-direction: column;
  list-style: none;
  padding-bottom: 10px;
}
</style>
