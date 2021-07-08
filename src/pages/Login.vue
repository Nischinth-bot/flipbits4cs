<template>
  <div class="login-page">
    <div class="main">
      <h1>Welcome back!</h1>
      <p>Please enter your login details</p>
      <div class="container-center">
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
          <button type="submit" class="button">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  components: {
  },
  // Emits the user name and password in an object upon clicking the submit button.
  emits: ["userInfo"],
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
      this.$emit("userInfo", userInfo);
      this.valid = true;
    },
  },
  mounted() {
  },
};
</script>



<style>
body {
  /* background: url("../../assets/clouds.jpg") no-repeat fixed center; */
  font-family: Tahoma, sans-serif;
}

.header {
  /* background: white; */
  border: solid 1px pink;
  text-align: right;
  border-radius: 25px;
  padding: 10px 10px;
}

.header span ul {
  list-style-type: none;
}

.button {
  display: inline-block;
  width: 100px;
  text-align: center;
  border: solid 1px white;
  padding: 20px 20px;
  color: white;
  border-radius: 25px;
  background-color: black;
}

.button:hover {
  cursor: pointer;
  font-size: 20px;
  color: yellow;
}

.main {
  width: 100%;
  float: center;
  padding-top: 15%;
}

.main .container-center {
  text-align: center;
}

.main h1 {
  text-align: center;
  font-size: 2rem;
}

.main p {
  text-align: center;
}

.main .login-form {
  display: inline-block;
  font-size: 20px;
  padding: 20px 20px;
}

.main .login-form label {
  display: inline-block;
  padding: 0px 20px;
}

.main .login-form input {
  width: 5rem;
  float: center;
}

.warning {
  color: red;
}
.container-sidebar-login {
  display: inline-block;
}
</style>

