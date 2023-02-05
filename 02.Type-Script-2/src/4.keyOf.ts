interface User{
    id:number,
    name:string,
}

let users:User[]=[
    {
        id:1,
        name:"Abhishek"
    },
    {
        id:2,
        name:"Manish"
    },
]

const getValue=(user:User,key:keyof User)=>{
    return user[key];
}

let responce=getValue(users[1],"name");

console.log(responce)