//* 4 ways to create object

//! literal way

const std = {
  rollNumber: 1,
  name: "Manish",
  lastname: "Mehta",
  skills: ["js", "sql", "java", "html"],
  isStudent: true,
  address: {
    city: "Thane",
    pinCode: 421002,
  },
};

//* two ways to access

console.log(std["rollNumber"]); //!using bracket notation
console.log(std.rollNumber); //!using dot notation

//* two ways to add element

std["middleName"] = "Arun";
std.isHuman = true;

//* two ways to update

std["skills"] = ["js", "spring"];
std.rollNumber = 2;

//* ways to delete(we can delete only using delete keyword)

delete std["isStudent"];
delete std.middleName;
console.log(std);


