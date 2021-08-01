export default {
  isAuthenticated(state) {
    return state.signedIn;
  },
  userId(state) {
    return state.userId;
  }
};
