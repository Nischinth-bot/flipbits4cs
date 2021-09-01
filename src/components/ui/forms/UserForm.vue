<template>
  <div class="container">
    <h1 class="banner">SIGNUP</h1>
    <img :src="getImgUrl('asu_logo.png')" />
    <h3 class="info">
      We just need some info from you in order to process your orders. Please
      fill out the form below!
    </h3>
    <form @submit.prevent="createAndExportUser()">
      <ul class="std-form">
        <li class="form-item">
          <label for="firstname"> First Name </label>
          <input type="string" id="firstname" v-model="firstname" />
        </li>
        <li class="form-item">
          <label for="lastname"> Last Name </label>
          <input type="string" id="lastname" v-model="lastname" />
        </li>
        <li class="form-item">
          <label for="addressl1"> Address Line 1 </label>
          <input type="string" id="addressl1" v-model="addressl1" />
        </li>
        <li class="form-item">
          <label for="addressl2"> Address Line 2 </label>
          <input type="string" id="addressl2" v-model="addressl2" />
        </li>
        <li class="form-item">
          <label for="phone"> Phone </label>
          <input type="phone" id="phone" v-model="phone" />
        </li>
      </ul>
      <button type="submit" class="brown-button">Submit</button>
    </form>
    <p v-if="showWarning" class="warning">
      Please check all fields and try again
    </p>
  </div>
</template>

<script>
import { addUserToUserbase } from '@/firebase.js';

export default {
  emits: ['createdUser'],
  data() {
    return {
      firstname: '',
      lastname: '',
      addressl1: '',
      addressl2: '',
      phone: null,
      showWarning: false,
    };
  },
  methods: {
    async createAndExportUser() {
      if (!this.formIsValid()) {
        this.showWarning = true;
        return;
      }
      const user = {
        key: Date.now(),
        email: this.$store.getters.userId,
        firstname: this.firstname,
        lastname: this.lastname,
        addressl1: this.addressl1,
        addressl2: this.addressl2,
        phone: this.phone,
        orders: [],
      };
      await addUserToUserbase(user);
      this.$emit('createdUser');
      this.showWarning = false;
      this.$router.push('/checkout');
    },
    formIsValid() {
      return !(
        this.firstname === '' ||
        this.lastname == '' ||
        (this.addressl1 === '' && this.addressl2 === '') ||
        this.phone === null
      );
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.std-form {
  display: flex;
  flex-direction: column;
  list-style: none;
  border: 1px solid black;
  border-radius: 25px;
  justify-content: space-between;
  width: 25vh;
  font-size: 25px;
}

li {
  margin: 10px;
}

.info {
  font-size: 25px;
  color: black;
  margin: 2rem;
}

img {
  width: 150px;
  height: 50px;
  margin-top: 2rem;
}
</style>
