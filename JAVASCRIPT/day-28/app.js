//* Promise

let p = new Promise( function(res,rej){
    var result = false;
    if(result) res("resolved promise 1");
    else rej("rejected promise 1");
} );

p.then( (d)=> {
    console.log(d)
    //console.log("resolved");
})

.catch( (e)=> {
    console.log(e)
   // console.log("rejected");
})

.finally( ()=> {
    console.log("finally method");
})

console.log(p);

//*----------------------------------------------- */

let p1 = Promise.resolve("promise resolved");
console.log(p1);

let p2 = Promise.reject("promise rejected");
console.log(p2);
p2.then(
    (d) => console.log(d),
    (e) => console.log(e)
);

//*----------------------------------------------- */
