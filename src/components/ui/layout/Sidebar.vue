<template>
  <div class="sidebar">
    <ul class="list">
      <li class="listItem" @click="$router.push('/shop')">
        <div>Shop</div>
        <img :src="getImgUrl('shop.png')" />
      </li>
      <li class="listItem" @click="$router.push('/home')">
        <div>Home</div>
        <img :src="getImgUrl('home.png')" />
      </li>
      <li class="listItem">
        <div>Mission</div>
        <img :src="getImgUrl('faq.png')" />
      </li>
    </ul>
  </div>
</template>

<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  border-right: 1px solid black;
  color: black;
  background:gold;
  height: 100%;
  position: fixed;
  margin-top: 1.70rem;
}

.sidebar:hover {
  cursor: pointer;
}

img {
  width: 20%;
  height: 20%;
}

.listItem:hover{
  color: orange;
}

.list {
  list-style: none;
}

.listItem {
  width: 125px;
  display: flex;
  justify-content: space-between;
}
</style>