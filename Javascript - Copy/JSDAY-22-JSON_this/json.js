let std={
    name:"abc",
    id:200,
    percentage:60,
}

let str=JSON.stringify(std);
console.log(str);
console.log(typeof str);


let p=JSON.parse(str)
console.log(p);
console.log(typeof p);
