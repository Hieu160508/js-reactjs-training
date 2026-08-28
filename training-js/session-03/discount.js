// && // AND - ca 2 dung thi dung
// || // OR - 1 trong 2 dung thi dung
// !  // NOT - dao nguoc boolean
// ?? // Nullish coalescing - chi fallback khi null/undefined
//
// const age1 = 0 || 10;  // => 10
// const age2 = 0 ?? 10;  // => 0
// 
// user && user.name         // Chi doc user.name neu user ton tai
// isLoggedIn || redirect()  // Chi redirect() neu isLoggerIN la falsy
// 
// const status = age >= 18 ? "adult" : "minor";
//
// function greet(name) { return 'Hi ${name}'; }
//
// const greet2 = function(name) { return 'Hi ${name}'; }
// const greet3 = (name) => 'Hi ${name}';

function calculateDiscount(price, customerType){
    const vip = function(price){ return price - (price * 20 / 100); }
    const regular = function(price){ return price - (price * 5 / 100); }
    const guest = function(price){ return price; }
    switch(customerType) {
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

console.log(calculateDiscount(100, "vip"));      // 80
console.log(calculateDiscount(100, "regular"));  // 95
console.log(calculateDiscount(100, "guest"));    // 100
console.log(calculateDiscount(100, "invalid")); 

// short-circuit evaluation, optional chaining ?.
// if/else, switch, ternary
// Phân biệt function declaration / expression / arrow function
// Tách logic bằng hàm con trong switch, tự phát hiện + tự sửa bug ở nhánh default