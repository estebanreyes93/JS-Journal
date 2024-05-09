let userName = "esteban";
let userName2 = "Maria";
let condition = true;
let available = true;
document.getElementById("myH1").textContent = `Hello, ${userName} , you are a 
${condition ? "student" : "teacher"}`;
if (condition) {
  document.getElementById("myP").textContent = `Hello, ${userName2} , you are a 
    Teacher`;
} else {
  document.getElementById("myP").textContent = `Hello, ${userName} , you are a 
    student`;
}
