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

.base-card {
  border-radius: 12px;
  border-color: white;
  background: rgb(202, 199, 199);
  color: black;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 0.5rem;
  max-width: 40rem;
  animation: fade 1s ease-in-out;
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