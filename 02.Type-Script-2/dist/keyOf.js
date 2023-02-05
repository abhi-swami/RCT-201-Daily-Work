let users = [
    {
        id: 1,
        name: "Abhishek"
    },
    {
        id: 2,
        name: "Manish"
    },
];
const getValue = (user, key) => {
    return user[key];
};
let responce = getValue(users[1], "name");
console.log(responce);
