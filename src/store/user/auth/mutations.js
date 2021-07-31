export default {
  signIn(state){
    state.signedIn = true;
  },
  signOut(state){
    state.signedIn = false;
  }
};
