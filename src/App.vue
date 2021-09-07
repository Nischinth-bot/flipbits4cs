<template>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
  </head>
  <div class="app">
    <div class="the-header">
      <the-header :numItems="numCartItems"></the-header>
    </div>
    <div class="sidebar-router">
      <div class="sidebar"><sidebar></sidebar></div>
      <div class="router-view">
        <router-view @updateCartCount="updateCartCount()"> </router-view>
      </div>
    </div>
    <i class="fa fa-user"></i>
    <div class="footer"> &copy; Nischinth Murari </div>
  </div>
</template>

<script>
import TheHeader from './components/ui/layout/TheHeader.vue';
import Sidebar from './components/ui/layout/Sidebar.vue';

export default {
  data() {
    return {
      numCartItems: 0,
      shop_items: [],
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
  /** Set the global inventory list in Vuex by loading from Firebase */
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
  margin: 0;
  padding: 0;
  font-family: Tahoma, sans-serif;
}

.app {
  display: flex;
  height: 100%  ;
  flex-direction: column;
}

.the-header {
  width: 100%;
  position: fixed;
  flex-grow: 1;
}

.sidebar-router {
  display: flex;
  flex: 1 0 auto;
  justify-content: flex-start;
  height: 100%;
  min-width: 100%;
}

.sidebar {
  min-width: 10%;
  height: 100%;
  margin-top: 1.5rem;
}
.banner {
  background: black;
  color: gold;
  margin-top: 5rem;
  text-align: center;
  width: 100%;
}

.router-view {
  color: black;
  width: 100%;
  height: 100%;
  flex: 1;
}

.warning {
  color: red;
}

.brown-button {
  color: white;
  background: brown;
  text-align: center;
  margin: 1rem;
  padding: 0.25rem;
  width: 100%;
}

.brown-button:hover {
  background: rgb(123, 29, 29);
  cursor: pointer;
}

.app .footer {
  width: 100%;
  text-align: center;
  background: black;
  color: gold;
  font-size: 20px;
  padding: 0.5rem;
  margin-top: 50vh;

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