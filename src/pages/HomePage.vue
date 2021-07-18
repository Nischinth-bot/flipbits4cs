<template>
  <div class="home-page">
    <div class="flipbits-apphack">
      <div class="flipbits">
        <h1>Flip Bits campaign</h1>
        <bit-pattern number="800000" random="false"> </bit-pattern>
        <h2>For endowed professorship</h2>
      </div>
      <div class="apphack">
        <h1>App Hack</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum ipsam
          soluta dolore natus nesciunt tenetur distinctio aliquam nisi
          necessitatibus cupiditate sed deserunt ducimus, quidem itaque tempore
          omnis, veritatis perspiciatis nihil!
        </p>
      </div>
    </div>
    <shop-page :modalMode="true" @updateCartCount="$emit('updateCartCount')"> </shop-page>
  </div>
</template>

<script>
import ShopPage from '../pages/ShopPage.vue';
import BitPattern from '../components/bits/BitPattern.vue';
export default {
  components: {
    ShopPage,
    BitPattern,
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

.transparent-modal{
  height: 100%;
  background: gold;
}
.flipbits-apphack {
  height: 100%;
  width: 100%;
  margin: 2rem;
}

.flipbits-apphack:hover {
  cursor: pointer;
}

.flipbits {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  height: 25rem;
  padding: 2rem;
  margin: 2rem;
}

.apphack {
  border: 1px solid black;
  margin-bottom: 10rem;
  padding: 5rem;
  background: black;
  color: gold;
  margin: 2rem;
}
</style>
