let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const genComputerchoice = () => {
    // rock, paper, scissors
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () =>{
    console.log("Game was draw")
}

const playGame = () => {
    console.log("user choice = ", userChoice);

    // generate computer choice -> modular way of programming(reusable components)
    const compChoice = genComputerchoice();
    console.log("computer choice = ", compChoice);

    if(userChoice === compChoice){
        // draw game
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            // scissors, paper
            compChoice === "paper" ? false : true;
        } 
        else if(userChoice == "paper"){
            
        }
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("Choice was clicked", userChoice);
        playGame();
    });
});

