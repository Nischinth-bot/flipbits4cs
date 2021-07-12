export default {
    getCartItems(){
        return this.$store.cartItems;
    },
    getNumberOfCartItems(){
        return this.$store.cartItems.length;
    }
}
