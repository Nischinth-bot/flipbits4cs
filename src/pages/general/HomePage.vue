<template>
  <div class="home-page">
    <h1 class="banner">HOME</h1>
    <div class="body">
      <img :src="getImgUrl('under_construction.png')" />
      <!-- <div class="flipbits-apphack">
      <base-card class="flipbits-tile">
        <flip-bits-tile></flip-bits-tile>
      </base-card>
      <base-card class="apphack-tile">
        <app-hack-tile></app-hack-tile>
      </base-card> -->
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
// import FlipBitsTile from '../../components/campaign/FlipBitsTile.vue';
// import AppHackTile from '../../components/campaign/AppHackTile.vue';
export default {
  components: {
    // FlipBitsTile,
    // AppHackTile,
  },
};
</script>

<style scoped>
.home-page {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.body {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  width: 100%;
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
