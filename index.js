"use strict"


let state="x";/*default = X, but will change between X to O every click on cells*/
let cellObj={};
let gameOver="no";
let winningCombination;
let counter=0;

// declare who won the game
const theWinnerIs=()=>{
    if (state==="x"){
        setTimeout(()=>{ alert(`Game over "X" won!`)},200);
    }
    else{
        setTimeout(()=>{ alert(`Game over "O" won!`)},200);
    }
    gameOver="yes"
}

// All options to win the game
function isSombodyWon() {
    counter++;
    const combinationsToWin = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], 
    [1, 4, 7], [2, 5, 8], [3, 6, 9], 
    [1, 5, 9], [3, 5, 7]              
    ];
    for (const combination of combinationsToWin) {
        const [a, b, c] = combination;
        if (cellObj[a] === cellObj[b] && cellObj[b] === cellObj[c] && cellObj[c] === state) {
            // Return the winning combination
            winningCombination = combination;
            console.log(winningCombination);
            for (let i=0;i<winningCombination.length;i++){
                const cell=document.querySelector(`#td${winningCombination[i]}`)
                cell.style.backgroundColor = "yellow";
            }
            theWinnerIs();
            return;
        }
    }
        if(counter===9){
            setTimeout(()=>{ alert(`Game over nobody won :)`)},200);
        }
    }



for (let i = 1; i < 10; i++) {
    const cell = document.querySelector(`#td${i}`);
    cell.addEventListener("click", () => {
        if(gameOver==="yes"){return}
        if (cell.innerHTML==="X"||cell.innerHTML==="O"){return}
        else{
            if(state==="x"){
            cell.style.color="red"
            cell.innerHTML="X"
            cellObj[i]="x"
            isSombodyWon();
            state="o"
            }
            else {
            cell.innerHTML="O"
            cell.style.color="blue"
            cellObj[i]="o"
            isSombodyWon();
            state="x"
            }
            }
    });
}


const reloadPage = () => {
    window.location.reload();
}

