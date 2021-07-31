export default {
  signIn(state, userId){
    state.signedIn = true;
    state.userId = userId;
  },
  signOut(state){
    state.signedIn = false;
    state.userId = '';
  }
};
