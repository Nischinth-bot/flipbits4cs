import actions from './actions.js';
import getters from './getters.js';
import mutations from './mutations.js';

export default {
  state() {
    return {
      // iventoryItem object
      inventory: [
        {
          description: 'App State Unisex M/F Computer Science T-shirt',
          key: '0xABCDEF',
          type: 'clothing',
          price: 25,
          link: 'burberry.png',
          units_remaining: 10
        },
        {
          description: 'App State FlipBits Coffee Mug',
          key: '0XABCDEF',
          type: 'misc',
          price: 15,
          link: 'mug.png',
          units_remaining: 15
        },
      ]
    };
  },
  actions,
  mutations,
  getters
};
