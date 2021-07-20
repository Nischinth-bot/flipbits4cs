<template>
  <div class="container">
    <base-card>
      <div class="content">
        <h1 class="flipbits-header">FLIP BITS</h1>
        <strong>
          <p class="description">
            Claim your unique pattern and commit a pledge towards the endowed
            professorship.
          </p>
        </strong>
        <p>
          The current bit value is :
          <strong> <input v-model.number="bitValue" type="string" /> </strong>.
          Click on individual bits to get your unique bit pattern.
        </p>
        <bit-pattern
          :interactive="true"
          :key="bitValue"
          :number="bitValue"
          @update-bit-value="update"
        >
        </bit-pattern>
        <span>
          <base-button @click="checkValue">
            Check for availability
          </base-button>
          <base-button @click="randomize"> Randomize </base-button>
          <base-button @click="claimPattern" v-if="available">
            Claim this pattern!
          </base-button>
        </span>
        <p v-if="checked && available" class="green">{{ availableMessage }}</p>
        <p v-if="checked && !available" class="red">{{ availableMessage }}</p>
        <base-dialog
          title="Confirm Your Donation"
          :show="showDialog"
          @close="closeDialog"
        >
        </base-dialog>
      </div>
    </base-card>
  </div>
</template>

<script>
import BitPattern from '../bits/BitPattern.vue';
export default {
  emits: ['update-donors'],
  components: { BitPattern },
  data() {
    return {
      bitValue: 0,
      checked: false,
      available: false,
      claimed: false,
      availableMessage: '',
      showDialog: false,
      donorList: [],
    };
  },
  methods: {
    update(val) {
      this.bitValue = val;
      this.checkValue();
    },
    closeDialog(confirmOrCancel) {
      this.showDialog = false;
      const donor = confirmOrCancel.donor;
      if (confirmOrCancel.type == 'confirm') {
        const donation = {
          fullName: donor.fullName,
          isAlumini: donor.isAlumini,
          yearOfGraduation: donor.yearOfGraduation,
          number: this.bitValue,
        };
        this.$store.dispatch('updateValues', donation);
        this.checkValue();
        // console.log(this.$store.getters.donations[1]);
        this.$emit('update-donors', this.$store.getters.donations);
      }
    },
    checkValue() {
      this.checked = true;
      const donations = this.$store.getters.donations;
      const matchingNumbers = donations.filter((donation) => {
        return donation.number == this.bitValue;
      });
      this.available = matchingNumbers.length == 0;
      if (this.available) {
        this.availableMessage = 'That pattern is available!';
      } else {
        this.availableMessage = 'Sorry! That pattern is unavailable.';
      }
      return this.available;
    },
    randomize() {
      this.bitValue = Math.floor(Math.random() * 800000);
      this.checkValue();
    },
    claimPattern() {
      this.showDialog = true;
    },
  },
  computed: {
    greenOrRed() {
      return this.available ? 'red' : 'green';
    },
  },
};
</script>

<style scoped>
a:active,
a:hover,
a.router-link-active {
  border: 1px solid #f391e3;
}

input {
  font-size: 20px;
  width: 100px;
  border: 0px solid black;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

.green {
  color: green;
}
.red {
  color: red;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.content * {
  margin: 0.25rem;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>