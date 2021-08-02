import { createStore } from 'vuex';
import  createPersistedState from 'vuex-persistedstate';

import bit_patterns from './bit_patterns/index.js';
import cart from './user/cart/index.js';
import shop from './shop/index.js';
import auth from './auth/index.js';

// Store is of type var because creating it as a const kills reactivity and Vuex as a whole.
var store = createStore({
  modules: {
    bits: bit_patterns,
    cart_stuff: cart,
    shop: shop,
    auth: auth
  },
  plugins:[createPersistedState()]
});

export default store;
