export default {
  signIn(state) {
      state.isAuthorized = true;
  },
  signOut(state){
      state.isAuthorized = false;
  }
};
