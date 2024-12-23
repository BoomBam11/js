let fruits =["apple","Mango","banana","Water melon", "Strawberry"]
fruits.sort()
console.log(fruits)

let numAr=[10,9,35,254,54,1000]
numAr.sort((x,y) => x-y)
numAr.sort((x,y) => y-x)
console.log(numAr)

//! STRING METHOD

let str ="Javascript"
console.log(str.slice(4,9))
console.log(str.slice(4))
console.log(str.slice(-4, -1))

console.log(str.substring(2, 5))
console.log(str.substr(3,4))

let s1 = "This is javascript lecture and you can learn javascript"
console.log(s1.length)
console.log(s1.includes("javascript",20)) //false
console.log(s1.includes("javascript")) //true
console.log(s1.includes("is ")) //true

//let r1 = s1.replace("javascript", "java")
let r1 = s1.replaceAll("javascript", "java")
console.log(r1)

let a="aditya"
console.log(a.toUpperCase())
let b="HELLO WORLD"
console.log(b.toLowerCase())

console.log(a.concat(b))

let val = true
console.log(typeof val)
console.log(typeof val.toString())

console.log(s1.indexOf("This", 1))
console.log(s1.lastIndexOf("javascript"))

let c = "          hello world        !!!!!!             "
console.log(c.length)
console.log(c.trim())
console.log(c.trimStart())
console.log(c.trimEnd())