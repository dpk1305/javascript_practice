// to get the values of the attribute

let class_name = document.querySelector("div");
console.log(class_name.getAttribute("class"));

// to set the values of the attribute
console.log(class_name.setAttribute("div","divya"));

// to change bg color of div
let div = document.querySelector("div");
div.style.backgroundColor = "red";

div.style.fontSize = "45px";

div.innerText = "Hello";

// div.style.visibility = "hidden";

// creating a new button

// let newBtn = document.createElement("button");
// newBtn.innerText = "click me";
// console.log(newBtn);

// // adding after div
// let node = document.querySelector("div");
// node.after(newBtn);

// // to remove an element
// newBtn.remove();

// practice question 1

let new_btn = document.createElement("button");
new_btn.innerText = "click me!!!";
new_btn.style.backgroundColor = "red"
new_btn.style.color = "white";
document.querySelector("body").prepend(new_btn);

// practice question 2
let para = document.querySelector("p");
para.classList.add("new_class");