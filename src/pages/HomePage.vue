<template>
  <div class="home-page">
    <div class="flipbits-apphack">
      <base-card class="flipbits-tile">
        <flip-bits-tile></flip-bits-tile>
      </base-card>
      <base-card class="apphack-tile">
        <app-hack-tile></app-hack-tile>
      </base-card>
    </div>
  </div>
</template>

<script>
import FlipBitsTile from '../components/campaign/FlipBitsTile.vue';
import AppHackTile from '../components/campaign/AppHackTile.vue';
export default {
  components: {
    FlipBitsTile,
    AppHackTile,
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


.flipbits:hover,
.apphack:hover {
  cursor: pointer;
}
</style>
