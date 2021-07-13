import bit_patterns from './bit_patterns/index.js';
import cart from './user/cart/index.js';
import shop from './shop/index.js';

export default {
    modules: {
        bits: bit_patterns,
        cart_stuff: cart,
        shop: shop,
    }
}