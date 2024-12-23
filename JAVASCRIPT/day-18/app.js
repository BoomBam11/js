let std = {
    name: "sachin",
    id: 121,
    skills: ["javascript", "java"],
  };
  
  let strRes = JSON.stringify(std);
  console.log(strRes);
  console.log(typeof strRes);
  
  let objRes = JSON.parse(std);
  console.log(objRes);
  
  //! Local Storage:
  console.log(window.localStorage);
  console.log(window.sessionStorage);
  
  window.localStorage.setItem("name", "virat");
  
  localStorage.setItem("id", 120);
  localStorage.setItem("isMarried", false);
  localStorage.setItem("skills", ["js", "react", "node"]);
  localStorage.setItem(
    "user",
    JSON.stringify({ name: "abc", id: 120, salary: 69999 })
  );
  
  let id = localStorage.getItem("id");
  console.log(Number(id));
  
  let isMarried = localStorage.getItem("isMarried");
  console.log(Boolean(isMarried));
  
  let skills = localStorage.getItem("skills");
  let skillsRes = skills.split("'");
  console.log(skillsRes);
  
  let user = localStorage.getItem("user");
  console.log(JSON.parse(user));
  
  // localStorage.clear();
  
  //! Session Storage:
  
  window.sessionStorage.setItem("name", "sachin");
  sessionStorage.setItem("id", 120);
  sessionStorage.setItem("isMArried", false);
  
  sessionStorage.removeItem("id");
  // sessionStorage.clear();
  