<template>
  <div class="login-page">
    <div class="main">
      <h1>Welcome back!</h1>
      <p>Please enter your login details</p>
      <form @submit.prevent="submitForm">
        <div class="login-form">
          <label for="username"> Username </label>
          <input type="text" id="username" v-model.trim="userName" />
          <label for="password"> Password </label>
          <input type="password" id="password" v-model.trim="password" />
        </div>
        <br />
        <p class="warning" v-if="!valid">
          Oops... your username and/or password is incorrect
        </p>
      </form>
      <base-button @click="submitForm()"> Submit </base-button>
    </div>
  </div>
</template>


<script>
export default {
  components: {},
  // Emits the user name and password in an object upon clicking the submit button.
  emits: ['userInfo'],
  data() {
    return {
      userName: null,
      password: null,
      valid: true,
    };
  },
  methods: {
    submitForm() {
      if (
        this.userName == null ||
        this.password == null ||
        this.userName.length < 5 ||
        this.password.length < 5
      ) {
        this.valid = false;
        return;
      }
      const userInfo = { userName: this.userName, password: this.password };
      this.$emit('userInfo', userInfo);
      this.valid = true;
    },
  },
  mounted() {},
};
</script>



<style>
body {
  /* background: url("../../assets/clouds.jpg") no-repeat fixed center; */
  font-family: Tahoma, sans-serif;
}

.login-page {
}
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 10rem;
}
.warning {
  color: red;
}
</style>

