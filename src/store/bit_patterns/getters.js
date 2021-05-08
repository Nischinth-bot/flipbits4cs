export default {
  donations(state) {
    return state.donations;
  },
  donorCount(state){
    return state.donations.length - 1;
  },
  goal(state){
    return state.goal;
  }
};
