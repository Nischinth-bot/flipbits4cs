<template>
  <div class="number-picker">
    <div class="plus" @click="increment()">+</div>
    <div class="number">{{ number }}</div>
    <div class="minus" @click="decrement()">-</div>
  </div>
</template>

<script>
export default {
  emits: ['update'],
  data() {
    return {
      number: 1,
    };
  },
  methods: {
    increment() {
      this.number += 1;
      const payload = this.number;
      this.$emit('update', payload);
    },
    decrement() {
      if (this.number > 1) {
        this.number -= 1;
        const payload = this.number;
        this.$emit('update', payload);
      }
    },
  },
};
</script>

<style scoped>
.number-picker {
  width: 25%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
}
.plus {
  width: 25%;
  font-size: 20px;
  border: 1px solid black;
  background: gold;
  text-align: center;
}
.minus {
  width: 25%;
  font-size: 20px;
  border: 1px solid black;
  background: brown;
  color: white;
  text-align: center;
}
</style>
