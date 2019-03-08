var player1Id = document.getElementById("player1");
var player2Id = document.getElementById("player2");
var player1Score = document.getElementById("player1-score");
var player2Score = document.getElementById("player2-score");
var player1TotalScore = document.getElementById("player1-total-score");
var player2TotalScore = document.getElementById("player2-total-score");
var green = "#F64C72";

$("#winner-container").hide();

    $(document).ready(function() {
        window.setTimeout("fadeMyDiv();", 30000);
    }
)

    function fadeMyDiv() {
        $("#footer").fadeOut('slow');
}

var player1 = {
    score: 0,
    holdScore: 0,
    turn: true
};

var player2 = {
    score: 0,
    holdScore: 0,
    turn: false
};

var addScore;
var min = 1;
var max = 7;

player1Score.innerHTML = player1.score;
player2Score.innerHTML = player2.score;
player1TotalScore.innerHTML = player1.holdScore;
player2TotalScore.innerHTML = player2.holdScore;

function rollDice() {

    //player1's turn
    if (player1.turn == true) {
        player1Id.style.backgroundColor = green;
        player2Id.style.backgroundColor = "";

        var randomNumber = Math.floor(Math.random() * (+max - +min)) + +min;
        addScore = randomNumber;

        if (randomNumber === 1 && player1.turn == true) {
            player2Id.style.backgroundColor = green;
            player1Id.style.backgroundColor = "";
            player1.score = 0;
            player1.turn = false;
            player2.turn = true;
        }
        if (randomNumber !== 1 && player1.turn == true) {
            player1.score += addScore;
        }
        player1Score.innerHTML = player1.score;
    }

    //player2's turn
    if (player2.turn == true) {
        player2Id.style.backgroundColor = green;
        player1Id.style.backgroundColor = "";

        var randomNumber = Math.floor(Math.random() * (+max - +min)) + +min;
        addScore = randomNumber;

        if (randomNumber === 1 && player2.turn == true) {
            player1Id.style.backgroundColor = green;
            player2Id.style.backgroundColor = "";
            player2.score = 0;
            player2.turn = false;
            player1.turn = true;
        }
        if (randomNumber !== 1 && player2.turn == true) {
            player2.score += addScore;
        }
        player2Score.innerHTML = player2.score;
    }
}

function hold() {

    //player 1 holds
    if (player1.turn == true) {

        player1.holdScore = player1.score + player1.holdScore;
        player1TotalScore.innerHTML = player1.holdScore;
        player1.score = 0;
        player1Score.innerHTML = player1.score;

        player1.turn = false;
        player2.turn = true;
        console.log("player1 passes to player2");
        player2Id.style.backgroundColor = green;
        player1Id.style.backgroundColor = "";

        //check if there is a winner
        if (player1.holdScore >= 100) {
            $("#winner-container").show();
            $("#winner-title").html("P1 WON");
            $("#main").hide();
        }
        return player2.turn;
    }

    //player 2 holds
    if (player2.turn == true) {

        player2.holdScore = player2.score + player2.holdScore;
        player2TotalScore.innerHTML = player2.holdScore;
        player2.score = 0;
        player2Score.innerHTML = player2.score;

        player2.turn = false;
        player1.turn = true;
        console.log("player2 passes to player1");
        player1Id.style.backgroundColor = green;
        player2Id.style.backgroundColor = "";

        //check if there is a winner
        if (player2.holdScore >= 100) {
            $("#winner-container").show();
            $("#winner-title").html("P2 WON");
            $("#main").hide();
        }
        return player1.turn;
    }
}

function newGame() {
    player1.holdScore = 0;
    player1.score = 0;
    player2.holdScore = 0;
    player2.score = 0;

    player1TotalScore.innerHTML = player1.holdScore;
    player1Score.innerHTML = player1.score;
    player2TotalScore.innerHTML = player2.holdScore;
    player2Score.innerHTML = player2.score;

    player2Id.style.backgroundColor = "";
    player1Id.style.backgroundColor = "";
}

function reset() {
    $("#winner-container").hide();
    $("main").show();
    newGame();
}

