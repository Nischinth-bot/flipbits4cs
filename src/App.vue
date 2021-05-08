<template>
  <div id="header">
    <the-header> </the-header>
  </div>
  <div class="lineOne">
    <donor-count> </donor-count>
    <donor-list :donorList="donorList"> </donor-list>
  </div>
  <goal> </goal>
  <flip-bits @update-donors="updateDonorList"> </flip-bits>
</template>

<script>
import DonorCount from './components/layout/DonorCount.vue';
import TheHeader from './components/layout/TheHeader.vue';
import Goal from './components/layout/Goal.vue';
import FlipBits from './components/layout/FlipBits.vue';
import DonorList from './components/layout/DonorList.vue';
export default {
  components: {
    TheHeader,
    DonorCount,
    Goal,
    FlipBits,
    DonorList,
  },
  data() {
    return {
      donorList: [],
    };
  },
  methods: {
    updateDonorList(newDonorList) {
      this.donorList = newDonorList;
      console.log(this.donorList[1]);
    },
  },
  created() {
    this.donorList = [];
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}

.lineOne {
  display: flex;
  position: relative;
  left: 150px;
  /* width: 1000px;  */
}

.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>