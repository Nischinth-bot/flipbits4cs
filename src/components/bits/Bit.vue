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
        return 'bit-zero';
      }
      return 'bit-one';
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
html {
}
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

.bit-zero {
  font-size: 30px;
  border: 1px solid black;
  color: black;
  background: gold;
  border: 1px solid gold;

  padding: 5px;
}

.bit-one {
  font-size: 30px;
  background: black;
  border: 1px solid black;

  color: gold;
  padding: 5px;
}

.bit:hover {
  cursor: pointer;
}
</style>