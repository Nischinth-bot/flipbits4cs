<template>
  <div class="app">
    <head>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
    </head>
    <div class="the-header">
      <the-header></the-header>
    </div>
    <div class="router-view">
      <router-view> </router-view>
    </div>
    <div class="footer">Footer</div>
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
export default {
  components: {
    TheHeader,
  },
  data() {
    return {
      donorList: [],
    };
  },
  methods: {
    updateDonorList(newDonorList) {
      this.donorList = newDonorList;
      console.log(this.donorList[1]);
    },
  },
  created() {
    this.donorList = [];
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

html, body {
  font-family: Tahoma, sans-serif;
  height: 100%;
  background: rgb(172, 172, 172);
  color: gold;
}

h1 {
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

.footer {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: black;
  color: gold;
  text-align: center;
}

.app {
}

</style>