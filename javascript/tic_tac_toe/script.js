let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let msg_container = document.querySelector(".msg_container");
let newbtn = document.querySelector("#new_game");
let msg = document.querySelector(".msg");
let container = document.querySelector(".container");
let title = document.querySelector(".title");


resetbtn.addEventListener("click", () =>{
    reset();
})

container.classList.remove("hide");
title.classList.remove("hide");

newbtn.addEventListener("click", () =>{
    let turn0 = true;
    let turnx = false; 
    enableboxes();
    msg_container.classList.add("hide");
    container.classList.remove("hide");
    resetbtn.classList.remove("hide");
    title.classList.remove("hide");
   
})

// array of winnig patterns...
const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
    
];

let turn0 = true;
let turnx = false; 

boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        if(turn0){
            box.innerText = "O";
            turn0 = false;
        }
        else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkwinner();
    });
   
});

const reset = () =>{
    let turn0 = true;
    let turnx = false; 
    enableboxes();

}

let disableboxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
let enableboxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

let showwinner = (winner) =>{
    // if(winner === "O"){
    //     winner = "Deepak";
    // }
    // else{
    //     winner = "Sugreev";
    // }
    msg.innerText =    `Congratulation, winner is ${winner}`;
    msg_container.classList.remove("hide");
    container.classList.add("hide");
    title.classList.add("hide");
    resetbtn.classList.add("hide");

}


let checkwinner = () =>{
    for(let pattern of winPattern){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val!="" && pos2val !="" && pos3val != ""){
            if(pos1val === pos2val && pos2val == pos3val){
                
                let winner = pos1val;
                showwinner(winner);
                disableboxes();
            }
    }

   
    }
}


