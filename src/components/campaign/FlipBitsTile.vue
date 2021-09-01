<template>
  <div class="flipbits" @click="$router.push('/campaign')">
    <h1>Flip Bits campaign</h1>
    <bit-pattern number="800000" random="false"> </bit-pattern>
    <h2>For endowed professorship</h2>
  </div>
</template>

<script>
import BitPattern from '../bits/BitPattern.vue';
export default {
  components: { BitPattern },
};
</script>


<style scoped>
.flipbits {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 25rem;
  padding: 2rem;
  margin: 2rem;
  color: black;
}
</style>