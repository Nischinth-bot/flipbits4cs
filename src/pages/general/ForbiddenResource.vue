<template>
  <div class="container">
    <base-button @click="$router.push('/home')">Go back to Home Page</base-button>
    <div class="message">
      <img :src="getImgUrl('secured-lock.png')" />
      <p>Sorry... you are requesting a <br /></p>
      <h1>Forbidden Resource</h1>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['updateCartCount'],
  created(){
    this.$emit('updateCartCount');
  }
};
</script>


<style scoped>
.container {
  height: 100%;
  background: gold;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.message {
  text-align: center;
  margin: 1rem;
}
</style>