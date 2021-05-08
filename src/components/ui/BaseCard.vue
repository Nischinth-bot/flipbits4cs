<template>
  <div class="card">
    <div :class='goldOrWhiteBG'>
      <slot> </slot>
    </div>
  </div>
</template>


<script>
export default {
  props: ['background'],
  computed: {
    goldOrWhiteBG() {
      if (this.background) {
        return 'base-card-gold';
      }
      return 'base-card';
    },
  },
};
</script>



<style>
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.card {
  position: relative;
  right: 160px;
  width: 1000px;
}

.base-card {
  border-radius: 12px;
  border-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;
  display: block;
  animation-name: 'fade-in';
  animation-duration: 2s;
}

.base-card-gold {
  border-radius: 12px;
  border-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  background-color: gold;
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;
  display: block;
  animation-name: 'fade-in';
  animation-duration: 2s;
}

.base-card h1 {
  margin: 0;
  background-color: black;
  color: gold;
}

p strong {
  margin: 4px;
  font-size: 200%;
}
</style>