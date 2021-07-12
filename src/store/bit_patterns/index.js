import actions from './actions.js';
import mutations from './mutations.js';
import getters from './getters.js';

const bit_patterns = {
  state() {
    return {
      donations: [{ number: -1 }],
      goal: 800000
    };
  },
  actions,
  mutations,
  getters
};

export default bit_patterns;