<template>
  <div @click="flip" :class="getClassForBit">
    {{ bit_copy }}
  </div>
</template>

<script>
export default {
  emits: ['flipped-bit'],
  props: [
    'bit',
    'index',
    'interactive',
    'maxBits',
    'donorList',
    //Is bit being rendered for DonorList? IF so, we need to reduce font-size size by 50%
  ],
  data() {
    return {
      bit_copy: 0,
    };
  },
  computed: {
    //   This method returns one of 4 CSS classes. The interactive bit patterns will have a hand icon upon hover.
    getClassForBit() {
      if (this.bit_copy == 0) {
        if (this.interactive) {
          return 'zero-hand';
        }
        if (this.donorList) {
          return 'zero-small';
        }
        return 'zero';
      }
      if (this.interactive) {
        return 'one-hand';
      }
      if (this.donorList) {
        return 'one-small';
      }

      return 'one';
    },
  },
  methods: {
    flip() {
      if (!this.interactive) {
        return;
      }
      var type = '';
      if (this.bit_copy == 0) {
        this.bit_copy = 1;
        type = 'add';
      } else {
        type = 'sub';
        this.bit_copy = 0;
      }
      this.$emit('flipped-bit', {
        value: Math.pow(2, this.maxBits - this.index - 1),
        op: type,
      });
    },
  },
  created() {
    this.bit_copy = this.bit;
  },
};
</script>

<style scoped>
@keyframes gold-to-black {
  0% {
    background-color: black;
    color: gold;
  }
  100% {
    background-color: gold;
    color: black;
  }
}

@keyframes black-to-gold {
  0% {
    background-color: gold;
    color: black;
  }
  100% {
    background-color: black;
    color: gold;
  }
}

.zero {
  color: gold;
  background-color: black;
  font-size: 200%;
  padding: 5%;
  border: 1px solid gold;
}
.zero-small {
  color: gold;
  background-color: black;
  font-size: 100%;
  padding: 5%;
  border: 1px solid gold;
}

.zero-hand {
  /* animation-name: black-to-gold;
  animation-duration: 1s; */
  color: gold;
  background-color: black;
  font-size: 200%;
  padding: 5%;
  border: 1px solid gold;
  cursor: pointer;
}

.one {
  color: black;
  background-color: gold;
  font-size: 200%;
  padding: 5%;
  border: 1px solid gold;
}
.one-small {
  color: black;
  background-color: gold;
  font-size: 100%;
  padding: 5%;
  border: 1px solid gold;
}

.one-hand {
  /* animation-name: gold-to-black;
  animation-duration: 1s; */
  color: black;
  background-color: gold;
  font-size: 200%;
  padding: 5%;
  border: 1px solid gold;
  cursor: pointer;
}
</style>