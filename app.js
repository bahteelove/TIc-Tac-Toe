const Player = (name, mark, turn, score) => {
    return {name, mark, turn, score}
}

const board = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

const user1 = Player("user 1", "x", false, 0)
const user2 = Player("user 2", "o", false, 0)

const btn = document.querySelectorAll(".field")
const score = document.querySelector(".score");

function checkWinner() {
    for (let i = 0; i < 3; i++) {
        // horizontal
        if ( equal( board[i][0], board[i][1], board[i][2] ) ) {
            console.log("WIN - horizontal -", board[i][0]);
            if (board[i][0] == "x") user1.score += 1;
            else user2.score += 1
            changeScore()
        }
        // vertical
        if ( equal( board[0][i], board[1][i], board[2][i] ) ) {
            console.log("WIN - vertical -", board[0][i]);
            if (board[0][i] == "x") user1.score += 1;
            else user2.score += 1
            changeScore()
        }
    }
  
    // diagonal
    if ( equal( board[0][0], board[1][1], board[2][2] ) || equal( board[0][2], board[1][1], board[2][0] ) ) {
        console.log("WIN - diagonal -", board[2][2]);
        if (board[2][0] == "x") user1.score += 1;
        else user2.score += 1
        changeScore()
    }
}


function changeTurn() {
    if (user1.turn) {
        user1.turn = false
        user2.turn = true
    }else {
        user1.turn = true
        user2.turn = false
    }
    
}

function changeScore() {
    score.textContent = `${user1.score} - ${user2.score}`
}

function reloadPlace(board) {
    for (el of btn) el.textContent = ""
    board = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ]
    user1.turn = false
    user2.turn = false
}

function restartGame() {
    user1.score = 0
    user2.score = 0
    for (el of btn) el.textContent = ""
    score.textContent = "0 - 0"
    user1.turn = false
    user2.turn = false
}

// run game
function move(index, row, colum) {
    changeTurn()
    if (user1.turn) {
        btn[index].textContent = user1.mark
        board[row][colum] = user1.mark
    }
    if (user2.turn) {
        btn[index].textContent = user2.mark
        board[row][colum] = user2.mark
    }
    checkWinner()
}


// additioonal functions
function showBoard() {
    for (elem of board) console.log(elem);
}

function equal(val1, val2, val3) {
    if ((val1 == val2) && (val2 == val3) && (val1 == val3)) return true;
}