<template>
  <div class="header-meta">
    <div class="header">
      <div id="company-name" @click="$router.push('/home')">
        <h1><strong> FlipBits </strong></h1>
      </div>
      <div class="right">
        <div class="login-signup">
          <auth-bar> </auth-bar>
        </div>
        <div class="user-icon">
          <i
            id="user"
            class="fa fa-user"
            style="font-size: 24px; color: gold"
            @click="$router.push('/user')"
          ></i>
        </div>
        <div
          @mouseenter="cartHover = true"
          @mouseleave="cartHover = false"
          @click="$router.push('/cart')"
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
  </div>
</template>


<script>
import AuthBar from '../utils/AuthBar.vue';
export default {
  components: { AuthBar },
  data() {
    return {
      cartHover: false,
    };
  },
  props: ['numItems'],
};
</script>

<style scoped>
.header-meta {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.right {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

#user {
  margin-right: 1rem;
}

#cart {
  margin: 0.25rem;
}

.logo img {
  margin-left: auto;
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
  color: gold;
}

.login {
}

.login-signup {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
}

img {
  margin: 1rem;
}
</style>

