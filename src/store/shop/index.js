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
          key: 'App State Unisex M/F Computer Science T-shirt',
          type: 'clothing',
          price: 25,
          link: 'burberry.png',
          units_remaining: 100
        },
        {
          description: 'App State FlipBits Coffee Mug',
          key: 'mug',
          type: 'misc',
          price: 15,
          link: 'mug.png',
          units_remaining: 100
        },
        {
          description: 'App State Unisex M/F Computer Science T-shirt',
          key: 'App State Unisex M/F Computer Science T-shirt',
          type: 'clothing',
          price: 25,
          link: 'burberry.png',
          units_remaining: 100
        },
        {
          description: 'App State FlipBits Coffee Mug',
          key: 'mug',
          type: 'misc',
          price: 15,
          link: 'mug.png',
          units_remaining: 100
        }
      ]
    };
  },
  actions,
  mutations,
  getters
};
