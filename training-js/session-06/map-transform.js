const users = [
  { firstName: "Nguyễn", lastName: "An", age: 25 },
  { firstName: "Trần", lastName: "Bình", age: 30 },
  { firstName: "Lê", lastName: "Chi", age: 22 },
];
function transformUsers(users) {
    return users.map(user => ({
        fullName: `${user.firstName} ${user.lastName}`,
        isAdult: user.age >= 18
    }));
}
console.log(transformUsers(users));
