interface UserNode{
    id:number,
    name:string,
}
interface UserNode{
   getId:()=>number;
}
const userProp:UserNode={id:1,name:'string',getId:()=>userProp.id};
console.log(userProp.getId())


class UserNodeElement implements UserNode{
    id :number
    name:string
    constructor(id:number,name:string){
        this.id=id;
        this.name=name;
    }
    getId=()=>{ return this.id}
    
}

let user=new UserNodeElement(1,"Abhishek")
console.log(user.getId())