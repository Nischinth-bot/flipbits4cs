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
        <div
          @mouseenter="cartHover = true"
          @mouseleave="cartHover = false"
          @click="goToCartPage()"
          class="cart"
        >
          <i
            id="cart"
            class="fa fa-shopping-cart"
            style="font-size: 24px; color: gold"
          ></i>
          <strong> {{ numItems }} </strong>
        </div>
      </div>
    </div>
    <!-- <div class="logo">
      <img src="../../assets/asu_logo.png" /> -->
      <!-- <div v-if="cartHover === true" class="msg">
        <h2>Hovering..</h2>
      </div> -->
    <!-- </div> -->
  </div>
</template>


<script>
export default {
  data() {
    return {
      cartHover: false,
    };
  },
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
  justify-content: center;
}
.right {
  display: flex;
  justify-content: space-around;
}

img {
  width: 25%;
  width: 200px;
  height: 50px;
}
.logo {
  /* display:flex;
  margin-top: 2rem;
  width: 100%;
  border: 1px solid black; */
}

.logo img {
  margin-left : auto;
  margin-right: auto;
}

.logo h2 {
  justify-content: flex-end;
  margin-left: auto;
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

