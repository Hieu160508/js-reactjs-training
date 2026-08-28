// BUOI 2

//console.log(1 + "1");
//console.log("5" - 2);
//console.log(true + true);       //Khi gap 2 boolean => true = 1, false = 0 => true + true = 1 + 1 = 2
//console.log([] == false);       //False = 0, [].toString() = "" => 0 == 0 => true
//console.log(typeof null);       //bug 
//console.log(typeof undefined); 
//console.log(NaN == NaN);        //NaN: Not a Number => false => Number.isNaN(NaN) => true

function normalizeUserInput(rawInput) {
    // rawInput vi du: { name: "Hieu", age: "20", active: "true" }
    // Cau tra ve: { name: "Hieu", age: 20, active: true }
    // Xu ly: chuoi  rong, "NaN", null
    rawInput = rawInput || { name: "", age: NaN, active: false };

    const name = (rawInput.name || "").trim();
    const numericAge = Number(rawInput.age);
    const age = Number.isNaN(numericAge) ? NaN : numericAge;
    const active = rawInput.active === "true";

    return { name, age, active };
}

console.log(normalizeUserInput({ name: "Hieu", age: "0", active: "true" }));

const original = { name: "Hieu", age: 20, active: true };
const result = normalizeUserInput(original);
console.log("result:", result);
console.log("original:", original);

//Tổng kết Buổi 02

//✅ Hiểu let vs const, primitive vs object (giá trị vs reference)
//✅ Nắm 8 giá trị falsy, bẫy "0" là truthy
//✅ Hiểu coercion, phân biệt == vs ===, biết vì sao luôn ưu tiên ===
//✅ Phân biệt null/undefined/NaN, biết dùng Number.isNaN()
//✅ Làm bài tập normalizeUserInput — phát hiện đúng 2 bug kinh điển: 0 || NaN (falsy trap) và mutate input gốc