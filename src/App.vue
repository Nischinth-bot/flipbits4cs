<template>
  <div class="app">
    <head>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
    </head>
    <div class="the-header">
      <the-header :numItems="numItems"></the-header>
    </div>
    <div class="router-view">
      <router-view @updateCartCount="updateCartCount()"> </router-view>
    </div>
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
export default {
  data(){
    return {
      numItems : 0,
    }
  },
  methods: {
    updateCartCount(){
      this.numItems = this.$store.getters.numCartItems;
    },
  },  
  components: {
    TheHeader,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  font-family: Tahoma, sans-serif;
  /* background: rgb(233, 233, 228); */
  height: 100%;
}

.router-view {
  position: absolute;
  width: 100%;
  color: rgb(204, 178, 28);
}

.app {
  min-height: 100%;
  color: black;
}

@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes slide-zoom {
  0% {
    font-size: inherit;
  }

  100% {
    font-size: 30px;
  }
}
</style>