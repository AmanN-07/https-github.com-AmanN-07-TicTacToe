let cells = document.querySelectorAll(".cell");
let status = document.getElementById("status");
let reset = document.getElementById("reset");
let gameOver = false;
let player = "X";

for(let i = 0; i < cells.length; i++) {

    cells[i].onclick = function() {

        if(gameOver)
          return;


        if(cells[i].innerHTML != "")
            return;

        cells[i].innerHTML = player;

        checkWinner();

        if(gameOver)
          return;

        if(player == "X")
            player = "O";
        else
            player = "X";

        status.innerHTML = "Player " + player + "'s Turn";
    };
}

function checkWinner() {

    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    for(let i = 0; i < wins.length; i++) {

        let a = wins[i][0];
        let b = wins[i][1];
        let c = wins[i][2];

        if(
            cells[a].innerHTML != "" &&
            cells[a].innerHTML == cells[b].innerHTML &&
            cells[b].innerHTML == cells[c].innerHTML
        ) {
            status.innerHTML = cells[a].innerHTML + " Wins!";
            gameOver=true;
            return;
        }
    }
}

reset.onclick = function() {

    for(let i=0;i<cells.length; i++){
        cells[i].innerHTML = "";
    }
    player = "X";
    gameOver=false;
    status.innerHTML = "Player X's Turn";
};