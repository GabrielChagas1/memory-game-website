const moves = document.getElementById('moves-count');
const timeValue = document.getElementById('time');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const gameContainer = document.querySelector('.game-container');
const result = document.getElementById('result');
const controls = document.querySelector('.controls-container');

let cards, interval, firstCard = false,
secondCard = false;

// Itens Array
const items = [
  { name: "bee", image: "bee.png" },
  { name: "crocodile", image: "crocodile.png" },
  { name: "macaw", image: "macaw.png" },
  { name: "gorilla", image: "gorilla.png" },
  { name: "tiger", image: "tiger.png" },
  { name: "monkey", image: "monkey.png" },
  { name: "chameleon", image: "chameleon.png" },
  { name: "piranha", image: "piranha.png" },
  { name: "anaconda", image: "anaconda.png" },
  { name: "sloth", image: "sloth.png" },
  { name: "cockatoo", image: "cockatoo.png" },
  { name: "toucan", image: "toucan.png" },
]

//Initial Time
let seconds = 0,
  minutes = 0;
//Initial moves and win count
let movesCount = 0,
  winCount = 0;
