<template>
  <div class="login-page">
    <div class="main">
      <h1>Welcome back!</h1>
      <p>Please enter your login details</p>
      <br>
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

.login-page {
  animation: fade 1s ease-in-out;
}

.main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 2rem;
}

h1{
  padding: 2rem;
}

li{
  padding: 0.5rem;
}
.warning {
  color: red;
}
</style>

