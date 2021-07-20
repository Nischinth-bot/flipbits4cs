<template>
  <div class="campaign">
    <h1 class="campaign-header">Flip Bits Campaign</h1>
    <ul class="campaign-dashboard">
      <li>
        <flip-bits></flip-bits>
      </li>
      <li></li>
    </ul>
  </div>
</template>

<script>
import FlipBits from '../components/campaign/FlipBits.vue';
export default {
  components: { FlipBits },
};
</script>

<style scoped>
.campaign {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 2rem;
}

.campaign-header {
  text-align: center;
}
</style>