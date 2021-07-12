export default {
    getCartItems(){
        return this.$store.cartItems;
    },
    getNumCartItems(){
        return this.$store.cartItems.length;
    }
}
