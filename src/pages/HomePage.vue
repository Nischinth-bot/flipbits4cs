<template>
  <div class="home-page">
    <div class="flipbits-apphack">
      <base-card class="flipbits-card">
        <flip-bits-home-page></flip-bits-home-page>
      </base-card>
      <div class="apphack">
        <h1>App Hack Sponsorship</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum ipsam
          soluta dolore natus nesciunt tenetur distinctio aliquam nisi
          necessitatibus cupiditate sed deserunt ducimus, quidem itaque tempore
          omnis, veritatis perspiciatis nihil!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import FlipBitsHomePage from '../components/campaign/FlipBitsHomePage.vue';
export default {
  components: {
    FlipBitsHomePage,
  },
  methods: {
    goToProgressPage() {
      this.$router.push('/progress');
    },
    goToShopPage() {
      this.$router.push('/shop');
    },
  },
};
</script>

<style scoped>
.home-page {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.transparent-modal {
  height: 100%;
  background: gold;
}
.flipbits-apphack {
  display: flex;
  flex-direction: column;
  margin: 2rem;
  padding: 2rem;
}

.flipbits-apphack:hover {
  cursor: pointer;
}
.apphack {
  padding: 5rem;
  background: black;
  color: gold;
  margin: 2rem;
}

.flipbits:hover,
.apphack:hover {
}
</style>
