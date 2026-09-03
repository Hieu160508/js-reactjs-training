const products = [
  { name: "Laptop", price: 15000000, category: "electronics", stock: 5 },
  { name: "Bàn phím", price: 500000, category: "electronics", stock: 0 },
  { name: "Áo khoác", price: 800000, category: "fashion", stock: 3 },
  { name: "Giày", price: 1200000, category: "fashion", stock: 0 },
];

function hasOutOfStock(products) {
    return products.some(product => product.stock === 0);
}
console.log(hasOutOfStock(products)); // true

function allElectronicssAbove400k(products) {
    return products.filter(product => product.category === "electronics")
        .every(product => product.price > 400000);
}
console.log(allElectronicssAbove400k(products)); 

function findIndexOfAoKhoac(products) {
    return products.findIndex(product => product.name === "Áo khoác");
}
console.log(findIndexOfAoKhoac(products)); // 2

function sortByPriceAscending(products) {
    return [...products].sort((a, b) => a.price - b.price);
}
console.log(sortByPriceAscending(products));