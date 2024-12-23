//! HOMOGENOUS ARRAY

let fruits=[
    "apple",
    "mango",
    "orange",
    "jack fruit",
    "banana",
    "water melon"
]
let obj= { name: "abc"}
console.log(fruits.length)
console.log(typeof fruits)
console.log(Array.isArray(100))
console.log(Array.isArray(fruits))
console.log(Array.isArray(obj))

//*-------------------------------------------------------

//! HETEROGENOUS ARRAY  

let arr= [
    10,
    100n,
    () => {
        console.log("start")
        var b=200
        console.log(b)
        return "arr"
    } ,
    ["10", "30"],
    "javascript",
    {name:"sachin"},
    null,
    10,
    10,
]
console.log(arr.length)
console.log(arr[3][0])
console.log(arr[2]())

arr[6]="replaced value"
arr[9]=200
// arr[13]=3000
// console.log(arr[11])

delete arr[7]
console.log(arr)
console.log(arr[7])

//*-------------------------------------------------------

//! LOOPING STATEMENT0

let i=0
while(i<=5){
    console.log("hello")
    i++
}



let j=0
do{
    console.log("hello")
    j++ 
}
while(j<5)
    

for(let i=0;i<5;i++){
    console.log("hello")
}  

let str="javascript"
for(let i=0;i < str.length; i++){
    console.log(i)
    console.log(str[i])
} 

for(let i in str){
    console.log(i)
} 

for(let v of str){
    console.log(v)
} 

let arr1=[10,20,30,40,50]
for(let a of arr1){
    console.log(a)
} 