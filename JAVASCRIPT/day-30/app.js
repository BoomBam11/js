// async function demo() {
//     try{
//         console.log("start");
//         let c= 2000;
//         console.log(c);
//         console.log("js");
//         console.log("end");
//         const z = 400;
//         z=8000;
//         return "true";

//     }
//     catch(e){
//     console.log("error");
//     }
//     finally{
//         console.log("finally block")
//     }
// }

// let r1= demo();

//console.log(r1);
//r1.then(
//    (d) => console.log("resolved"),
//    (e) => console.log("error")
//)

//*-----------------------------------------
// let p = Promise.resolve("resolved");

// let arr = async () => {
//     console.log("start");
//     await p;
//     console.log("end")
// }
// arr()
// console.log("hello world");

//*-----------------------------------------
let fetchDate = async () => {
    try {
        let data = await window.fetch("https://api.github.com/users");
        let finalData = await data.json();
    } catch (error) {
        console.log("err");
    }
};
fetchDate();

