//generics==>generalising
let a = "hello";
let b = 1;
let c = true;
const getData = (arg) => {
    return arg;
};
getData(a);
const arr = ["a", "b", "c", "d", "e"];
const index = [0, 1, 2, 3, 4];
// const getElementOfArray = <T1,T2>(arg1:T1[],arg2:T2):  => {
//   return arg1[arg2]
// };
// getElementOfArray<string,number>(arr,index);
const useState = (arg) => {
    let v = arg;
    const setV = (newValue) => {
        v = newValue;
    };
    return [v, setV];
};
const [count, setCount] = useState(8);
// let  [name,setName]=useState<string>("Abhishek")
const useState1 = (arg) => {
    let state = arg;
    const setState = (newValue) => {
        state = newValue;
    };
    return [state, setState];
};
const [state, setState] = useState1(1);
