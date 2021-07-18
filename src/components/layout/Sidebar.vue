<template>
  <div class="sidebar">
    <ul class="list">
      <li @click="$router.push('/shop')">
        <img :src="getImgUrl('shop.png')" />
      </li>
      <li @click="$router.push('/home')">
        <img :src="getImgUrl('home.png')" />
      </li>
      <li><img :src="getImgUrl('faq.png')" /></li>
    </ul>
  </div>
</template>

<style scoped>
.sidebar {
  display: flex;
  justify-content: center;
  align-items: center;
  background: gold;
  color: black;
  width: 15%;
  height: 100%;
  position: fixed;
  margin-top: 1.5rem;
}

img {
  width: 20px;
  height: 20px;
}

ul {
  list-style: none;
}
</style>