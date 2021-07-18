<template>
  <div class="cart-item-alpha">
    <div class="cart-item">
      <div class="item-img">
        <img :src="getImgUrl(imgLink)" />
      </div>
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
      <div class="buttons">
        <base-button @click="removeItemFromCart()" class="cart-button">
          <div class="button">Remove</div>
        </base-button>
        <base-button class="cart-button" @click="clickedEdit = true">
          <div class="button">Edit item</div>
        </base-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clickedRemove: false,
      clickedEdit: false,
    };
  },
  emits: ['updateCartCount'],
  props: ['description', 'opts', 'type', 'price', 'key__', 'units', 'imgLink'],
  methods: {
    removeItemFromCart() {
      console.log('Here');
      this.$store.commit('removeItemFromCart', this.key__);
      this.$emit('updateCartCount');
    },
  },
  mounted() {
    console.log(this.imgLink);
  },
};
</script>

<style scoped>
.cart-item-alpha {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background: white;
}
.cart-item {
  display: flex;
  font-size: 20px;
  justify-content: space-around;
  margin: 1rem;
}
.cart-item * {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  text-align: center;
}
.cart-item img {
  width: 100px;
  height: 100px;
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

/* .cart-button {
  background-color: wheat;
  font-size: 20px;
  margin-top: auto;
  margin-bottom: auto;
  width: 100%;
  border: 1px solid black;
  border-radius: 25px;
} */

.cart-button:hover {
  cursor: pointer;
}

.buttons {
  display: flex;
  flex-direction: column;
}
.button {
  font-size: 12px;
}
</style>
