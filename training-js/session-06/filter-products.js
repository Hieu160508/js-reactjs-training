const products = [
  { name: "Laptop", price: 15000000, category: "electronics" },
  { name: "Bàn phím", price: 500000, category: "electronics" },
  { name: "Áo khoác", price: 800000, category: "fashion" },
  { name: "Giày", price: 1200000, category: "fashion" },
  { name: "Tai nghe", price: 300000, category: "electronics" },
];
function filterByCategory(products, category) {
    return products.filter(product => product.category === category);
}
console.log(filterByCategory(products, "electronics"));
