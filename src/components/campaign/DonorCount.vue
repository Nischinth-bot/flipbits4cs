<template>
  <base-card>
    <h1>DONOR COUNT</h1>
    <p>
      We have had <strong>{{ donorCount }}</strong> donations so far!
    </p>
    <bit-pattern :interactive="false" :key="donorCount" :number="donorCount"> </bit-pattern>
  </base-card>
</template>

<script>
import BitPattern from '../bits/BitPattern.vue';
export default {
  components: { BitPattern },
  computed: {
    donorCount(){
      return this.$store.getters.donorCount;
    }
  },
};
</script>