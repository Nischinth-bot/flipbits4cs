<template>
  <div class="row">
    <div class="column">
      <donor-count> </donor-count>
      <goal> </goal>
      <flip-bits @update-donors="updateDonorList"> </flip-bits>
    </div>
  </div>
</template>

<script>
import DonorCount from '../components/layout/DonorCount.vue';
import Goal from '../components/layout/Goal.vue';
import FlipBits from '../components/layout/FlipBits.vue';
export default {
  components: {
      DonorCount, FlipBits, Goal 
  },
};
</script>
