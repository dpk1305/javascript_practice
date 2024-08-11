let btn = document.querySelector("button");
let div = document.querySelector("div");
// div.onmouseover = "console.log('you are at div')";

// btn.onclick = () =>{
//     console.log('i was clicked')
// };
// div.onmouseover = () =>{
//     console.log('you are at div');
// };

// event listners
// btn.addEventListener("click", (e) =>{
//     console.log('i was clicked')
// });
// btn.addEventListener("click", () =>{
//     console.log('i was clicked - handler-2')
// });
// const handler3 = () =>{
//     console.log('i was clicked - handler-3')
// }
// btn.addEventListener("click", handler3);
// btn.addEventListener("click", () =>{
//     console.log('i was clicked - handler-4')
// });

// btn.removeEventListener("click",handler3) // to remove handler

// practice q-1

let modebtn = document.querySelector("#mode");
let currMode = "light";
modebtn.addEventListener("click", ()=>{
    if(currMode === "light"){
        document.querySelector("body").style.backgroundColor = "black";
        currMode = "dark";}
    else{
        document.querySelector("body").style.backgroundColor = "white";
        currMode = "light";
    }
})