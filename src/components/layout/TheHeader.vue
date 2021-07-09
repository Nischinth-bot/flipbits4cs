<template>
  <div class="header" >
    <div id="company-name" @click="goToHomePage()">
      <h1><strong> FlipBits </strong></h1>
      <img src="./asu_logo.png"/>
    </div>
    <div class="right">
      <div class="login-signup">
        <base-button @click="goToLoginPage()"> Login </base-button>
        <base-button @click="goToSignupPage()"> Signup </base-button>
      </div>
      <div class="cart">
        <i
          id="cart"
          class="fa fa-shopping-cart"
          style="font-size: 24px; color: gold"
        ></i>
        <strong> {{ this.cart.itemCount }} </strong>
      </div>
    </div>
  </div>
</template>


<script>
import BaseButton from '../ui/BaseButton.vue';
export default {
  components: { BaseButton },
  data() {
    return {
      cart: {
        itemCount: 0,
        items: [],
        empty: true,
      },
    };
  },
  methods: {
    goToSignupPage() {
      this.$router.push('/signup');
    },
    goToLoginPage() {
      this.$router.push('/login');
    },
    goToHomePage() {
      this.$router.push('/home');
    },
  },
};
</script>

<style>
.right {
  display: flex;
  justify-content: space-around;
}
img {
  width: 200px;
  height: 50px;
}

.header {
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  background: rgb(167, 165, 165);
  color: gold;
  padding: 10px 10px;
}

#company-name {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.cart {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90px;
}
</style>

