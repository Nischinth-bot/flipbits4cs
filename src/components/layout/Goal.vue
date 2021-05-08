<template>
  <base-card>
    <h1>GOAL</h1>
    <p>Our goal is to raise <strong> ${{ donationsRequired }}</strong> for an endowement.</p>
    <bit-pattern :interactive="false" :key="donationsRequired" :number="donationsRequired"> </bit-pattern>
  </base-card>

</template>

<script>
import BitPattern from '../bits/BitPattern.vue';
import BaseCard from '../ui/BaseCard.vue';
export default {
  data() {
  },
  computed: {
    donationsRequired(){
      return (this.$store.getters.goal - (this.$store.getters.donorCount * 1000));
    }
  },
  components: { BaseCard, BitPattern },
};
</script>

<style scoped>
.left {
  position: absolute;
  left: 0px;
  width: 200px;
  padding: 10px;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid #f391e3;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

li {
  margin: 0 0.5rem;
}
</style>