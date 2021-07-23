<template>
  <div class="container">
    <h3 class="title"> Sign in with Google to view your account </h3>
    <button
      class="icon"
      @click="handleClickSignIn"
      :disabled="!Vue3GoogleOauth.isInit || Vue3GoogleOauth.isAuthorized"
    >
      <button
        @click="handleClickSignOut"
        :disabled="!Vue3GoogleOauth.isAuthorized"
        v-if="Vue3GoogleOauth.isAuthorized"
      >
        sign out
      </button>
      <img
        src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
        width="200"
        alt="google logo png suite everything you need know about google newest"
      />
    </button>
  </div>
</template>

<script>
import { inject, toRefs } from 'vue';

export default {
  data() {
    return {
      user: '',
    };
  },

  methods: {
    async handleClickSignIn() {
      try {
        const googleUser = await this.$gAuth.signIn();
        if (!googleUser) {
          return null;
        }
        console.log('googleUser', googleUser);
        this.user = googleUser.getBasicProfile().getEmail();
        console.log('getId', this.user);
        console.log('getBasicProfile', googleUser.getBasicProfile());
        console.log('getAuthResponse', googleUser.getAuthResponse());
        console.log(
          'getAuthResponse',
          this.$gAuth.instance.currentUser.get().getAuthResponse()
        );
      } catch (error) {
        //on fail do something
        console.error(error);
        return null;
      }
    },

    async handleClickGetAuthCode() {
      try {
        const authCode = await this.$gAuth.getAuthCode();
        console.log('authCode', authCode);
      } catch (error) {
        //on fail do something
        console.error(error);
        return null;
      }
    },

    async handleClickSignOut() {
      try {
        await this.$gAuth.signOut();
        console.log('isAuthorized', this.Vue3GoogleOauth.isAuthorized);
        this.user = '';
      } catch (error) {
        console.error(error);
      }
    },

    handleClickDisconnect() {
      window.location.href = `https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=${window.location.href}`;
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
.container {
  margin-top: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: black;

}
.icon {
  margin: 2rem;
}

img {
  width: 150px;
  height: 150px;
}

button:disabled {
  background: #fff;
  color: #ddd;
  cursor: not-allowed;
}
</style>
