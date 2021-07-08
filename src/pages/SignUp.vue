<template>
  <div class="signup-page">
    <h1>Sign up</h1>
    <form class="signup-form" @submit.prevent="submitForm">
      <label for="first-name">First Name </label>
      <input type="text" id="first-name" v-model="first_name" />
      <label for="last-name">Last Name </label>
      <input type="text" id="last-name" v-model="last_name" />
      <label for="email">Your Email </label>
      <input type="text" id="email" v-model="email" />
      <label for="email">Enter a new password </label>
      <input type="password" id="email" v-model="password" />
      <button type="submit">Submit</button>
    </form>
    <p v-if="!validState && validState != null">
      Your input is invalid. Please check all fields and try again.
    </p>
  </div>
</template>

<script>
export default {
  emits: ['signup-user-info'],
  data() {
    return {
      first_name: null,
      last_name: null,
      email: null,
      password: null,
      validState: null,
    };
  },
  methods: {
    submitForm() {
      if (
        this.first_name === null ||
        this.last_name === null ||
        this.email === null ||
        this.password === null
      ) {
        this.validState = false;
        return;
      }
      this.validState = true;
      this.$emit('signup-user-info', {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>

<style scoped>

.signup-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 10rem;
}

.signup-page h1 {
  align-self: center;
}

.signup-form {
  flex-direction: column;
  display: flex;
}

.signup-form label {
  margin: 10px;
}

ul {
  list-style: none;
}

button {
  background: black;
  color: white;
  border: 1px solid black;
}

p {
  color: red;
}
</style>
