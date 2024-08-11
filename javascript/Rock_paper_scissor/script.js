const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");
const msgContainer = document.querySelector(".msg_container");
const user_score = document.querySelector("#user_score");
const comp_score = document.querySelector("#comp_score");
// msg.innerText = "hello";

let userScore = 0;
let compScore = 0;

//draw
let drawGame = () =>{
    msg.innerText = "Draw";
    msgContainer.style.backgroundColor = "grey";
}

//show
const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msgContainer.style.backgroundColor = "green";
        let userTOtalScore = ++userScore;
        user_score.innerText = userTOtalScore;
    }
    else{
        msg.innerText = `You lose! ${compChoice} beats Your ${userChoice}`;
        msgContainer.style.backgroundColor = "red";
        let comptTOtalScore = ++compScore;
        comp_score.innerText =comptTOtalScore;
    }
}

//play
const playGame = (userChoice) => {
   let compChoice = gencompChoice();
   console.log("your choice", userChoice);
   console.log("comp choice", compChoice);
   if(userChoice === compChoice){
    drawGame();
   }
    else{
        userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper"? false: true;
        }

        else if(userChoice === "paper"){
            userWin = compChoice === "scisssor"? false: true;
        }

        else{
            userwin = compChoice === "rock"? false: true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
   
   
} ;

// computer choice

let gencompChoice = () =>{
let arr = ["rock", "paper", "scissor"];
let arridx = Math.floor(Math.random() * 3);
// console.log(arridx);
return arr[arridx];
// console.log(compChoice)
}


// user choice
choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        let userChoice =  choice.getAttribute("id");
        playGame(userChoice);
    });
});