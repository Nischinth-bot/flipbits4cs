import bit_patterns from '../store/bit_patterns/index.js';
import cart from '../store/cart/index.js';
import shop from '../store/shop/index.js';

export default {
    modules: {
        bits: bit_patterns,
        cart_stuff: cart,
        shop: shop,
    }
}