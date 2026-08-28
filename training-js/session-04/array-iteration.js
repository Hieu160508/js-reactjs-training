// const fruits = ['apple', 'banana'];  
// fruits.push('orange');      // them vao cuoi 
// fruits.pop();               // xoa phan tu cuoi
// fruits.unshift('kiwi');     // them vao dau
// fruits.shift();             // xoa phan tu dau
// fruits.length;              // so luong phan tu trong mang
// fruits[0];                  // truy cap phan tu dau tien

// // for - traditional - dung khi can index
// for (let i = 0; i < fruits.length; i++) {
//   console.log(i, fruits[i]);
// }

// // for...of - ngan gon hon - dung khi can gia tri phan tu
// for (const fruit of fruits) {
//   console.log(fruit);
// }

// // forEach - hien dai - dung callback
// fruits.forEach((fruit, index) => {
//   console.log(index, fruit);
// });
// // 

// const numbers = [1, 2, 3, 4, 5];

// const doubled = numbers.map(n => n * 2);          // [2,4,6,8,10] - bien doi tung phan tu trong mang
// const evens = numbers.filter(n => n % 2 === 0);   // [2,4] - loc theo dieu kien, do dai co the ngan hon
// const total = numbers.reduce((sum, n) => sum + n, 0); // 15 - gop mang thanh 1 gia tri duy nhat

// const original = [1, 2, 3];
// const doubled = original.map(n => n * 2); // [2, 4, 6]
// console.log(original); // [1, 2, 3] - khong doi
// console.log(doubled);  // [2, 4, 6] - mang moi

const orders = [
    { id: 1, customerType: "vip", price: 200 },
    { id: 2, customerType: "regular", price: 150 },
    { id: 3, customerType: "guest", price: 100 },
    { id: 4, customerType: "vip", price: 0 },
];
// const vip = orders
//     .filter(order => order.customerType === "vip")
//     .map(order => order.price - (order.price * 20 / 100));
// const regular = orders
//     .filter(order => order.customerType === "regular")
//     .map(order => order.price - (order.price * 5 / 100));
// const guest = orders
//     .filter(order => order.customerType === "guest")
//     .map(order => order.price);
// console.log(vip);      // [160, 0]
// console.log(regular);  // [142.5]
// console.log(guest);    // [100]

// const evens = orders.filter(order => order.price > 0);
// const total = evens.reduce((sum, order) => sum + order.price, 0);
// console.log(evens);   
// console.log(total);    

function calculateDiscount(price, customerType) {
  const vip = function (price) { return price - (price * 20 / 100); };
  const regular = function (price) { return price - (price * 5 / 100); };
  const guest = function (price) { return price; };

  switch (customerType) {
    case "vip":
      return vip(price);
    case "regular":
      return regular(price);
    case "guest":
      return guest(price);
    default:
      return guest(price);
  }
}

const finalPrices = orders.map(order =>
  calculateDiscount(order.price, order.customerType)
);
console.log(finalPrices); // [160, 142.5, 100, 0]

const positivePrices = finalPrices.filter(price => price > 0);
console.log(positivePrices); // [160, 142.5, 100]

const totalRevenue = finalPrices.reduce((sum, price) => sum + price, 0);
console.log(totalRevenue); // 402.5