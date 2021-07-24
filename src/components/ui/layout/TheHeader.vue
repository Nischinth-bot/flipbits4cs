<template>
  <div class="header-meta">
    <div class="header">
      <div id="company-name" @click="$router.push('/home')">
        <h1><strong> FlipBits </strong></h1>
      </div>
      <div class="right">
        <div class="login-signup">
          <img
            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
            width="20"
            height="20"
            class="logo"
            alt="google logo png suite everything you need know about google newest"
          />
          <base-button
            class="login"
            @click="handleClickSignIn"
            :disabled="!Vue3GoogleOauth.isInit || Vue3GoogleOauth.isAuthorized"
            v-if="!Vue3GoogleOauth.isAuthorized"
          >
            Sign in with Google
          </base-button>

          <base-button
            @click="handleClickSignOut"
            :disabled="!Vue3GoogleOauth.isAuthorized"
            v-if="Vue3GoogleOauth.isAuthorized"
            class="login"
          >
            Sign out
          </base-button>
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
    <!-- <div class="logo">
      <img src="../../assets/asu_logo.png" /> -->
    <!-- <div v-if="cartHover === true" class="msg">
        <h2>Hovering..</h2>
      </div> -->
    <!-- </div> -->
  </div>
</template>


<script>
import { inject, toRefs } from 'vue';

export default {
  data() {
    return {
      cartHover: false,
      user: '',
    };
  },
  props: ['numItems'],
  methods: {
    async handleClickSignIn() {
      try {
        const googleUser = await this.$gAuth.signIn();
        if (!googleUser) {
          return null;
        }
        console.log(this.user);
        console.log(googleUser.isSignedIn());
        this.user = googleUser.getBasicProfile().getEmail();
      } catch (error) {
        console.error(error);
        return null;
      }
    },
    async handleClickSignOut() {
      try {
        await this.$gAuth.signOut();
        this.user = '';
      } catch (error) {
        console.error(error);
      }
    },

  },
  setup(props) {
    const { isSignIn } = toRefs(props);
    const Vue3GoogleOauth = inject('Vue3GoogleOauth');
    const handleClickLogin = () => {};
    return {
      Vue3GoogleOauth,
      handleClickLogin,
      isSignIn,
    };
  },
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
}

.logo {
  /* display:flex;
  margin-top: 2rem;
  width: 100%;
  border: 1px solid black; */
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
}

.login {
}

.login-signup{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
}

img{
  margin: 1rem;
}
</style>

