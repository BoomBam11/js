let p = new Promise((res, rej) => {
  let isDataFetched = true;
  if (isDataFetched) {
    res("resolved");
  } else {
    rej("rejected");
  }
});
p.then((a) => {
  console.log(a);
  console.log("executes if it resolves state");
})
  .catch((b) => {
    console.log(b);
    console.log("executes if it resolves state");
  })
  .finally(() => {
    console.log("executes in both states ");
  });

let arr = [
  class name {
    constructor(parameters) {}
  },
  class name1 {
    constructor(parameters) {}
  },
];

console.log(arr);
