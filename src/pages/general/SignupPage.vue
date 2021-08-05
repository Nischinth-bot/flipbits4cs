<template>
  <div class="container">
    <div class="user-form">
      <user-form @createdUser="$router.push('/cart')"></user-form>
    </div>
  </div>
</template>

<script>
import UserForm from '../../components/ui/forms/UserForm.vue';
// import { checkIfUserExists } from '@/firebase.js';
export default {
  components: {
    UserForm,
  },
  data() {
    return {};
  },
};
</script>
