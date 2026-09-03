const users = [
  { id: 1, firstName: "Nguyễn", lastName: "An", age: 25 },
  { id: 2, firstName: "Trần", lastName: "Bình", age: 30 },
  { id: 3, firstName: "Lê", lastName: "Chi", age: 22 },
];

function findUserById(users, id) {
    return users.find(user => user.id === id);
}
console.log(findUserById(users, 2));