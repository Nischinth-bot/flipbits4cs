export default {
  isAuthenticated(state) {
    return state.isSignedIn;
  },
  userId(state) {
    return state.userId;
  }
};
