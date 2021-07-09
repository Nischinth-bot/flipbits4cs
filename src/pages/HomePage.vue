<template>
  <div class="welcome-page-alpha">
    <div class="welcome-page">
      <h1>Welcome!</h1>
      <br />
      <ul>
        <li>Our Mission</li>
        <li>Make a Pledge</li>
        <li>Our Progress</li>
        <li>AppState CS Merch</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style scoped>
.welcome-page-alpha {
  display: flex;
  justify-content: center;
  color: gold;
  animation: fade 1s ease-in-out;
}
.welcome-page {
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 25%;
  padding-top: 10%;
}

.welcome-page ul {
  list-style: none;
}

.welcome-page ul li:hover {
  /* font-size: 25px; */
  animation: slide-zoom 0.5s forwards;
  cursor: pointer;
}
</style>
