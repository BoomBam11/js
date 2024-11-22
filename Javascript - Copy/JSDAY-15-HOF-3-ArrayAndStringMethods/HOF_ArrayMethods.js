//Includes
let arr=[10,20,3,40,55,50,60];
console.log(arr.includes(10));


//Sort is HOF but callback is optional
let fruits=["apple","mango","bunty","chickens","mutton"]
console.log(fruits.sort());


let number=[10,20,3,40,55,50,60];
let sortedNumberAsc=number.sort((a,b)=>a-b)
console.log(sortedNumberAsc);


let sortedNumberDesc=number.sort((a,b)=>b-a)
console.log(sortedNumberDesc);
