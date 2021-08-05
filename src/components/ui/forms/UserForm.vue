<template>
  <div class="container">
    <form @submit.prevent="createUser()">
      <label for="firstname"> First Name </label>
      <input type="string" id="firstname" v-model="firstname" />
      <label for="lastname"> Last Name </label>
      <input type="string" id="lastname" v-model="lastname" />
      <label for="addressl1"> Address Line 1 </label>
      <input type="string" id="addressl1" v-model="addressl1" />
      <label for="addressl2"> Address Line 2 </label>
      <input type="string" id="addressl2" v-model="addressl2" />
      <label for="phone"> Phone </label>
      <input type="number" id="phone" />
      <button type="submit" class="brown-button">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstname: '',
      lastname: '',
      addressl1: '',
      addressl2: '',
      phone: '',
    };
  },
};
</script>

<style scoped>
</style>
