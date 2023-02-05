
//tupple is an array with some conditions
/*
when we can use tuples
      when 
    -the number of elements in an array is fixed,
    -types of those elements should be known
    -the order is important(ie the index at which element is going to be stored)
    -data is related to each other and data is in a specifc order(means order is important for tuple)
        -eg rgb,dd/mm/yyyy, hrs:minuts:seconds, 2D-Array
    NOTE-> in enums order is not important but in tupples order is important

*/


let rgb: [number, number,number];

let arr1: readonly [number, string, number];
let mat: [number, number][];
let mat1: [string, number][];
let mat2: [string, string,boolean?][];

rgb = [255,255,255];
arr1 = [3, "hello", 4];
mat = [
  [1, 2],
  [3, 4],
];
mat1=[["abhi",4],["swami",5]]
mat2=[["Abhishek","Swami"]]
