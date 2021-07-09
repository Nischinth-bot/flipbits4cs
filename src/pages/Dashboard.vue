<template>
  <div class="dashboard-alpha">
    <div class="dashboard">
      <goal> </goal>
      <donor-count></donor-count>
    </div>
  </div>
</template>

<script>
import Goal from '../components/layout/Goal.vue';
import DonorCount from '../components/layout/DonorCount.vue';
export default {
  components: { Goal, DonorCount },
};
</script>

<style scoped>
.dashboard {
  display: flex;
  flex-direction: column;
  width: 80%;
}

.dashboard-alpha {
    display: flex;
}
</style>
