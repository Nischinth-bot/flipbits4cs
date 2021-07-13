import actions from './actions.js';
import mutations from './mutations.js';
import getters from './getters.js';

export default {
    state() {
        return {
            cartItems: [],
            numItems: 0,
        }
    },
    getters,
    actions,
    mutations
}