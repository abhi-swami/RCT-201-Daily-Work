let num1: number = 10;
let isDone: boolean = true;
let firstName: string = "Abhishek";
let lastName: string = "Swami";
let fullName = `${firstName + lastName}`;
fullName = "RCT-201";
//Inference check--> its is the check made by type scripit only like eg if assigne number to fullName this it will be an error bcz type script is smart enough to detct the type of fullName

let temp1: null = null;
let temp2: undefined = undefined;
let arrNum: number[] = [1, 2, 3, 4, 5];
let arrNum2: Array<number> = [1, 2, 3, 4, 5];
console.log(arrNum, arrNum2);
let arrStr: string[] = ["a", "b", "c"];

let details: {
  first_name: string;
  last_name: string;
  age: number;
  addres?: string;
} = {
  first_name: "Abhishek",
  last_name: "Swami",
  age: 27,
  addres: "Togawas",
};

// for objects we should always keep in mind of inference and type (both are the ways to create/define the dataype which are going to be stored inside our array  )

interface User {
  first_name: string;
  last_name: string;
  age: number;
  addres?: string;
}
type User1 = {
  first_name: string;
  last_name: string;
  age: number;
  addres?: string;
};

//types are generally used to create variable/data type from premitive data types(all thought an object can also be created using type but it is  generally not  preferd) for an existing array and interface are only prefered for creating objects

let detail: User = {
  first_name: "Abhishek",
  last_name: "Swami",
  age: 27,
};
let detail1: User = {
  first_name: "Abhishek",
  last_name: "Swami",
  age: 27,
  addres: "Togawas",
};

//how to write array of object
let arrOfUser: User[] = [
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


function sum(a:number,b:number=2):number{
    return(a+b)
}
sum(6,2)


let numArr:number[]=[12,3,14,15,16,17]

const getIndex=(arr:number[],index:number):number=>{
    return arr[index]
}

const output:number=getIndex(numArr,2);
console.log(output)

const printDetails=({first_name,last_name,age}:User):void=>{
    console.log(`hello my name is ${first_name+last_name} and my age is${age}`)
}
printDetails(detail)

// unoin | ->OR intersection & ->AND

type customType=number|string;

let arrOfStrNum:customType[]=["Abhishek Swami",28]

interface PersonalDetail{
    firstName:string;
    lastName:string;
    age:number;
    isMarried:boolean;
}
interface ProfessionalDetail{
    stream:string;
    isExperienced:boolean;
    yearsOfExperience?:number
    
}
type employeDetail=PersonalDetail | ProfessionalDetail;

let userDetail:employeDetail[]=[{ firstName:"Ayushi",lastName:"Hathi",age:27,isMarried:true,stream:"SDE 2", isExperienced:true,yearsOfExperience:3}]
console.log(userDetail)
