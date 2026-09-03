const cart = [
        { name: "T-shirt", price: 1500000, quantity: 2 },
        { name: "Jeans", price: 350000, quantity: 1 },
        { name: "Sneakers", price: 300000, quantity: 3 }
    ];
function calculateTotal(cart) {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}
console.log(calculateTotal(cart));