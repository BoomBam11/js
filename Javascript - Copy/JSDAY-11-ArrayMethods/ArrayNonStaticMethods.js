//!Push unshift,pop shift

//!push()

let arr=[1,2,3,4,5,6];
let lengthOfArray=arr.push(7,8,9,10)

console.log(lengthOfArray);//returns length of array
console.log(arr);

//! unshift()

let lengthNewArr=arr.unshift(100,2000)//

console.log(arr);
console.log(lengthNewArr);


//! pop()

let newArr=new Array("str","js","java","python","node","ruby");

let removedElement=newArr.pop();
console.log(newArr)
console.log(removedElement);


//! shift()
let removedElementFromStart=newArr.shift()
console.log(removedElementFromStart);
console.log(newArr)




//!slice()

let newArray3=[1,2,3,4,5,6,7,8,9,10];
console.log(newArray3);

// let slicedArray=newArray3.slice()
let slicedArray=newArray3.slice(13,17)
console.log(slicedArray);


const arr3 = [1, 2, 3, 4,  5];

const slicedArr = arr3.slice(-4,-2); // Output: [4, 5]
console.log(slicedArr);


// !splice()

let newArray4=[1,2,3,4,5,6,7,8,9,10];
console.log(newArray4);

let spliced=newArray4.splice(2,1,"3")
console.log(spliced);
console.log(newArray4);




// console.log(x);
// let x=10;







