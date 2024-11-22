function f1(x="default",y="default")
{
    var a=10;
    const b=20;
    let c=100;
    console.log(a,b,c);
    console.log(x);
    console.log(y);
    return [1000,20000,3000];
    
}

let r1=f1();
console.log(r1);


function f2() {
    console.log("named function")
    return;//undefined
}

let r2=f2()
console.log(r2);
