<template>
  <div class="header-meta">
    <div class="header">
      <div id="company-name" @click="goToHomePage()">
        <h1><strong> FlipBits </strong></h1>
      </div>
      <div class="right">
        <div class="login-signup">
          <base-button @click="goToLoginPage()"> Login </base-button>
          <base-button @click="goToSignupPage()"> Signup </base-button>
        </div>
        <div class="cart" @click="goToCartPage()">
          <i
            id="cart"
            class="fa fa-shopping-cart"
            style="font-size: 24px; color: gold"
          ></i>
          <strong> {{ numItems }} </strong>
        </div>
      </div>
    </div>
    <div class="logo"><img src="./asu_logo.png" /></div>
  </div>
</template>


<script>
export default {
  props: ['numItems'],
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
    goToCartPage() {
      this.$router.push('/cart');
    },
  },
};
</script>

<style>
.header-meta {
  display: flex;
  flex-direction: column;
}
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
  /* background: rgb(167, 165, 165); */
  background: black;
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

