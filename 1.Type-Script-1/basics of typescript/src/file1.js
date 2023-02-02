var num1 = 10;
var isDone = true;
var firstName = "Abhishek";
var lastName = "Swami";
var fullName = "".concat(firstName + lastName);
fullName = "RCT-201";
//Inference check--> its is the check made by type scripit only like eg if assigne number to fullName this it will be an error bcz type script is smart enough to detct the type of fullName
var temp1 = null;
var temp2 = undefined;
var arrNum = [1, 2, 3, 4, 5];
var arrNum2 = [1, 2, 3, 4, 5];
console.log(arrNum, arrNum2);
var arrStr = ["a", "b", "c"];
var details = {
    first_name: "Abhishek",
    last_name: "Swami",
    age: 27,
    addres: "Togawas"
};
//types are generally used to create variable/data type from premitive data types(all thought an object can also be created using type but it is  generally not  preferd) for an existing array and interface are only prefered for creating objects
var detail = {
    first_name: "Abhishek",
    last_name: "Swami",
    age: 27
};
var detail1 = {
    first_name: "Abhishek",
    last_name: "Swami",
    age: 27,
    addres: "Togawas"
};
//how to write array of object
var arrOfUser = [
    {
        first_name: "Abhishek",
        last_name: "Swami",
        age: 27,
        addres: "Togawas"
    },
    {
        first_name: "Manish",
        last_name: "Swami",
        age: 28
    },
];
/*
the above code can be written in following ways

let arrOfUser: Array<User> = [
  {
    first_name: "Abhishek",
    last_name: "Swami",
    age: 27,
    addres: "Togawas",
  },
  {
    first_name: "Manish",
    last_name: "Swami",
    age: 28,
  },
];

*/
function sum(a, b) {
    if (b === void 0) { b = 2; }
    return (a + b);
}
sum(6, 2);
var numArr = [12, 3, 14, 15, 16, 17];
var getIndex = function (arr, index) {
    return arr[index];
};
var output = getIndex(numArr, 2);
console.log(output);
var printDetails = function (_a) {
    var first_name = _a.first_name, last_name = _a.last_name, age = _a.age;
    console.log("hello my name is ".concat(first_name + last_name, " and my age is").concat(age));
};
printDetails(detail);
var arrOfStrNum = ["Abhishek Swami", 28];
var userDetail = [{ firstName: "Ayushi", lastName: "Hathi", age: 27, isMarried: true, stream: "SDE 2", isExperienced: true, yearsOfExperience: 3 }];
console.log(userDetail);
