//! to check how many vowels in string
let x = "javAscript"
let vowels = "aeiouAEIOU"
function countVowels(x){
    let count = 0
    for(let val of x) if (vowels.includes(val)) count++
    return count
}
console.log(countVowels(x))
console.log(countVowels("JAVA"))
//*------------------------------------------

//! remove duplicate value

let arr = [10, 20, 30, 40, 10, 10, 20, 10, 30]
let newAr = []
for(let m of arr) if (newAr.includes(m) == false) newAr.push(m)
console.log(newAr) 
//*-------------------------------------------

//! check given number is prime number or not

let num = 19
function isPrime(num){
  if(num == 1)  return false
  let count = 0
  for (let i = 2; i<num; i++) if (num % i == 0) count++
    return count == 0  
}
console.log(isPrime(num))
console.log(isPrime(12))
console.log(isPrime(1))
//*----------------------------------------------------

let numAr = [20, 28, 29, 33, 31, 69, 67, 93]
let res = numAr.filter((v) => { return isPrime(v)})
console.log(res)
//*-----------------------------------------------------

//! Armstrong number
let n = 153
function isArmstrong(num){
    let temp = num
    let sum = 0 
    let count = num.toString().length
    while(num > 0){
        let d = num % 10
        sum = sum + d ** count
        num = parseInt(num / 10)
    }
    return sum == temp
}
console.log(isArmstrong(n))
console.log(isArmstrong(370))
console.log(isArmstrong(371))
//*---------------------------------------------

//! find small & grater number from array
let aray = [20, 30, 10, 7, 6, 300, 69]
//console.log(Math.max(...aray))
//console.log(math.min(...aray))

let big = aray[0]
for(let v of aray){
    if(v > big) big = v
}
console.log(big)

let small = aray[0]
for(let v of aray){
    if(v < small) small = v
}
console.log(small)