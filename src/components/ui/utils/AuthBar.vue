<template>
  <div class="signin-signout">
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
      v-if="!Vue3GoogleOauth.isAuthorized"
    >
      <div class="message">Sign in with Google</div>
    </base-button>

    <base-button
      @click="handleClickSignOut"
      v-if="Vue3GoogleOauth.isAuthorized"
      class="login"
    >
      Sign out
    </base-button>
  </div>
</template>

<script>
import { inject, toRefs } from 'vue';
import { checkIfUserExists } from '@/firebase';
export default {
  methods: {
    async handleClickSignIn() {
      try {
        const googleUser = await this.$gAuth.signIn();
        if (!googleUser) {
          return null;
        }
        this.user = googleUser.getBasicProfile().getEmail();
        // console.log(this.user);
      } catch (error) {
        console.error(error);
        return null;
      }
      //Get the auth state and put it in Vuex for global visibility
      this.$store.commit('signIn', this.user);
      if (await checkIfUserExists(this.$store.getters.userId) === false) {
        this.$router.push('/signup');
      } else {
        this.$router.push('/shop');
      }
      // console.log(this.$store.getters.isAuthenticated);
      // console.log(this.$store.getters.userId);
    },
    async handleClickSignOut() {
      try {
        await this.$gAuth.signOut();
        this.user = '';
      } catch (error) {
        console.error(error);
      }
      //Get the auth state and put it in Vuex for global visibility
      this.$store.commit('signOut');
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
.signin-signout {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

img {
  margin: 1rem;
}
</style>
