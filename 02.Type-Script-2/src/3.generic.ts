//generics==>generalising


let a: string = "hello";
let b: number = 1;
let c: boolean = true;

const getData=<T1>(arg:T1):T1=>{
  return arg;
}
getData<string>(a)







const arr=["a","b","c","d","e"];
const index=[0,1,2,3,4]
// const getElementOfArray = <T1,T2>(arg1:T1[],arg2:T2):  => {
//   return arg1[arg2]
// };
// getElementOfArray<string,number>(arr,index);






const useState = <T>(arg: T):[T,(m:T)=>void] => {
  let v: typeof arg= arg;
  const setV = (newValue: T): void => {
    v = newValue;
  };
  return [v, setV];
};
const [count,setCount]=useState<number>(8)
// let  [name,setName]=useState<string>("Abhishek")







const useState1=<T>(arg:T):[T,(m:T)=>void]=>{
  let state:typeof arg=arg;
  const setState=(newValue:T):void=>{
    state=newValue;
  }
  return [state,setState]
}
const [state,setState]=useState1(1)