//!slice
let s = "Java Script";
console.log(s.slice(2, 6));
console.log(s.slice(-4, -1));

//!substring
console.log(s.substring(1, 4));
console.log(s.substring(-4, -1));

//!substr
console.log(s.substr(2, 3)); //! decrepted method
console.log(s.length);
console.log(s[9]);
console.log(s[s.length - 1]);

//!charAt
console.log(s.charAt(9));

//!charCodeAt
console.log(s.charCodeAt(1));
console.log(s.charCodeAt(9));

let str = "This is javascript lecture and you will learn javascript.";

//!replace
let newStr = str.replace("javascript", "Java");
console.log(str);
console.log(newStr);

//!replaceAll
let newStr2 = str.replaceAll("javascript", "java");

//!includes

let str1 = "Hello World";
console.log(str1.includes("e"));
console.log(str1.includes("e", 5));

//indexOf

console.log(str1.indexOf("ELLO")); // will return -1
console.log(str1.indexOf("ello"));

//lastindexOf

console.log(str1.lastIndexOf("l", 7));//3
console.log(str1.lastIndexOf("l"));//9
console.log(str1.lastIndexOf("d", 7));


// ! day-16- string methods

let str2="manish"
let str3="MEhta"
let str4="     trimed line    "
console.log(str2.concat(str3));

console.log(str4.trim());

console.log(str1.toUpperCase());
console.log(str4.toLowerCase());






