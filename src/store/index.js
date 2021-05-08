import actions from './bit_patterns/actions.js';
import mutations from './bit_patterns/mutations.js';
import getters from './bit_patterns/getters.js';

export default {
    state() {
        return {
            donations: [{number:-1}],
            goal: 800000,
        };
    },
    actions,
    mutations,
    getters
};