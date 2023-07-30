let x = Math.floor((Math.random() * 6) + 1);
let y = Math.floor((Math.random() * 6) + 1);
if (x == 1){
    document.querySelector(".dice1").innerHTML = '\n        <p>Player 1</p>\n        <img class="img1" src="images/dice1.png">\n      '
}
if (x == 2){
    document.querySelector(".dice1").innerHTML = '\n        <p>Player 1</p>\n        <img class="img1" src="images/dice2.png">\n      '
}
if (x == 3){
    document.querySelector(".dice1").innerHTML = '\n        <p>Player 1</p>\n        <img class="img1" src="images/dice3.png">\n      '
}
if (x == 4){
    document.querySelector(".dice1").innerHTML = '\n        <p>Player 1</p>\n        <img class="img1" src="images/dice4.png">\n      '
}
if (x == 5){
    document.querySelector(".dice1").innerHTML = '\n        <p>Player 1</p>\n        <img class="img1" src="images/dice5.png">\n      '
}
if (x == 6){
    document.querySelector(".dice1").innerHTML = '\n        <p>Player 1</p>\n        <img class="img1" src="images/dice6.png">\n      '
}
if (y == 1){
    document.querySelector(".dice2").innerHTML = '\n        <p>Player 2</p>\n        <img class="img1" src="images/dice1.png">\n      '
}
if (y == 2){
    document.querySelector(".dice2").innerHTML = '\n        <p>Player 2</p>\n        <img class="img1" src="images/dice2.png">\n      '
}
if (y == 3){
    document.querySelector(".dice2").innerHTML = '\n        <p>Player 2</p>\n        <img class="img1" src="images/dice3.png">\n      '
}
if (y == 4){
    document.querySelector(".dice2").innerHTML = '\n        <p>Player 2</p>\n        <img class="img1" src="images/dice4.png">\n      '
}
if (y == 5){
    document.querySelector(".dice2").innerHTML = '\n        <p>Player 2</p>\n        <img class="img1" src="images/dice5.png">\n      '
}
if (y == 6){
    document.querySelector(".dice2").innerHTML = '\n        <p>Player 2</p>\n        <img class="img1" src="images/dice6.png">\n      '
}

if (x < y){
    document.querySelector(".container h1").innerText = "🚩Player 2 Wins";
}
else if (x == y){
    document.querySelector(".container h1").innerText = "🏳️Its a tie";
}
else {
    document.querySelector(".container h1").innerText = "🚩Player 1 Wins";
}