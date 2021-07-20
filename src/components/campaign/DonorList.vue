<template>
  <base-card background="gold">
    <h3>Thanks to all our donors!</h3>
    <ul>
      <li v-for="donor in donorList" :key="donor.number">
        <div v-if="donor.number > -1">
          <div class="inline">
            <strong> {{ donor.fullName }} {{ donor.yearOfGraduation }} <br><br> </strong>
            <!-- <bit-pattern
              :number="donor.number"
              :interactive="false"
              donorList="true"
            /> -->
          </div>
        </div>
        <br />
      </li>
    </ul>
  </base-card>
</template>

<script>
// import BitPattern from '../bits/BitPattern.vue';
export default {
//   components: { BitPattern },
  props: ['donorList'],
};
</script>

<style scoped>
ul {
  list-style-type: none; /* Remove bullets */
  padding: 0; /* Remove padding */
  margin: 0; /* Remove margins */
}

.inline {
  display: flex;
  position: relative;
}
</style>

