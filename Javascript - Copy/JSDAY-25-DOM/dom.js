console.log(window)
console.log(document);
console.log(window.document);


let h1=document.getElementById("head");
console.log(h1);

setTimeout(()=>{
    h1.style.background="hotpink";
    h1.style.color="#fff"
})

let demo=document.getElementsByClassName("demo");
console.log(demo);
console.log(demo[0]);
console.log(demo[1]);

demo[0].style.background="red";
demo[1].style.color="pink"

// Array.from(demo).forEach(ele => {
//     ele.style.background="yellow";
// });

// for(let ele in demo){
//     demo[ele].style.background="yellow";
// }

for(let ele of demo){
    ele.style.background="yellow";
}

//*check htmlcollection is array or not

console.log(Array.isArray(demo));

//* convert htmlcollection into array

//*first way
console.log(Array.from(demo));

//*second way
console.log([...demo]);

//*third way
let newArr=Array.prototype.slice.call(demo)
console.log(newArr);


