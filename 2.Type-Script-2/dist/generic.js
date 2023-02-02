//generics==>generalising
const getIdentiy = (arg) => {
    return arg;
};
let a = "hello";
let b = 1;
let c = true;
getIdentiy(a);
getIdentiy(b);
getIdentiy(c);
const useState = (arg) => {
    let v = arg;
    const setV = (newValue) => {
        v = newValue;
    };
    return [v, setV];
};
const [count, setCount] = useState(8);
// let  [name,setName]=useState<string>("Abhishek")
