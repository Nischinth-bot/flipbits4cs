<template>
  <div class="campaign">
    <h1 class="banner">CAMPAIGN</h1>
    <flip-bits class="flip"></flip-bits>
  </div>
</template>

<script>
import FlipBits from '../../components/campaign/FlipBits.vue';
export default {
  components: { FlipBits },
};
</script>

<style scoped>
.campaign {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100vh;
}

.flip {
  margin-top: 5rem;
}
</style>