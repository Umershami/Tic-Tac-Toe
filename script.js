console.log("Tic Tac Toe Game");

let board = [' ', ' ', ' ',
             ' ', ' ', ' ',
             ' ', ' ', ' '];

let player1, player2;
let symbol1 = 'x';
let symbol2 = 'o';

function gameplay(player) {
    let space = prompt(`Player ${player}, choose a space (0-8):`);
    space = parseInt(space);
    
    if (isNaN(space) || space < 0 || space > 8 || board[space] !== ' ') {
        console.log("Invalid input or space already taken. Try again.");
        gameplay(player);
        return;
    }
    
    board[space] = player === player1 ? symbol1 : symbol2;
    displayBoard();
    
    if(checkWinner(player)){
        return;
    }
    
    if (player === player1) {
        gameplay(player2);
    } else {
        gameplay(player1);
    }
}

function displayBoard() {
    return ` ${board[0]} | ${board[1]} | ${board[2]} \n --------- \n ${board[3]} | ${board[4]} | ${board[5]} \n --------- \n ${board[6]} | ${board[7]} | ${board[8]} `;
}

function checkWinner(player) {
    const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6]
    ];

    for (let condition of winConditions) {
        const [a, b, c] = condition;
        if (board[a] === board[b] && board[a] === board[c] && board[a] !== ' ') {
            alert(`Player ${player} wins!\n\n${displayBoard()}`);
            document.getElementById(`cell${a}`).innerText = board[a];
            document.getElementById(`cell${b}`).innerText = board[b];
            document.getElementById(`cell${c}`).innerText = board[c];
            return true;
        }
    }

    if (!board.includes(' ')) {
        alert(`It's a draw!\n\n${displayBoard()}`);
        return true;
    }

    return false;
}

let toss = Math.floor(Math.random() * 2) + 1;
if (toss === 1) {
    player1 = 'Player 1';
    player2 = 'Player 2';
    alert(`${player1} First turn.\n\n${displayBoard()}`);
    gameplay(player1);
} else {
    player1 = 'Player 2';
    player2 = 'Player 1';
    alert(`${player1} Second turn.\n\n${displayBoard()}`);
    gameplay(player2);
}

   