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
      <button @click="removeItemFromCart()" class="remove-button">
        Remove
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clickedRemove: false,
    };
  },
  emits: ['updateCartCount'],
  props: ['description', 'opts', 'price', 'key__', 'units', 'imgLink'],
  methods: {
    removeItemFromCart() {
      // console.log(this.key__);
      this.$store.commit('removeItemFromCart', this.key__);
      this.$emit('updateCartCount');
    },
  },
  // getImgUrl() {
  //   return require('@/assets/' + this.imgLink);
  // },
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

.cart-item .img-item{
}
.cart-item img {
  width: 100px;
  height: 100px;
}


.units {
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

.remove-button {
  background-color: wheat;
  border-radius: 20px;
  font-size: 20px;
  margin-top: auto;
  margin-sottom: auto;
}

.remove-button:hover {
  cursor: pointer;
}

.modal-details {
  display: flex;
  width: 100%;
}

.modal-details .buttons {
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
}
</style>
