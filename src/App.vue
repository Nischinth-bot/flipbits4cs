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
    <div class="home-page">
      <home-page> </home-page>
    </div>
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import HomePage from './pages/HomePage.vue';
export default {
  components: {
    HomePage,
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
.row {
  display: flex;
}

.column {
  float: left;
  width: 50%;
}

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}
.app {
  background-color: white;
}

body {
  margin: 0;
}
</style>