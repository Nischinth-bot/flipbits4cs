<template>
  <div class="app">
    <head>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
    </head>
    <div class="the-header">
      <the-header :numItems="numCartItems"></the-header>
    </div>
    <div class="sidebar-router">
      <div class="sidebar"><sidebar></sidebar></div>
      <div class="router-view">
        <router-view @updateCartCount="updateCartCount()"> </router-view>
      </div>
    </div>
    <!-- <div class="footer"></div> -->
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import Sidebar from './components/layout/Sidebar.vue';

export default {
  data() {
    return {
      numCartItems: 0,
    };
  },
  methods: {
    updateCartCount() {
      this.numCartItems = this.$store.getters.numCartItems;
    },
  },
  components: {
    TheHeader,
    Sidebar,
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
}

.app {
  height: 100vh;
  display: flex;
  flex-direction: column;
  color: rgba(204, 178, 28);
}

.the-header {
  width: 100%;
  position: fixed;
}

.sidebar-router {
  display: flex;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
}

.sidebar {
  display: flex;
  height: 100%;
  width: 15%;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
}

.router-view {
  margin-top: 2rem;
  width: 85%;
  height: 100%;
}

@keyframes slide-zoom {
  0% {
    font-size: inherit;
  }

  100% {
    font-size: 30px;
  }
}

@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>