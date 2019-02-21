'use strict';
console.log('reading.js');

var slugSad = document.querySelector('#slugSad');
var trashOpen = document.querySelector('#trashOpen');
var pointer = document.querySelector('#pointer');
var helpText = document.querySelector('#helpText');
var textBlock = document.querySelector('#textBlock');

var boot = document.querySelector('#boot');
var bottle = document.querySelector('#bottle');
var can = document.querySelector('#can');
var net = document.querySelector('#net');
var paper = document.querySelector('#paper');
var plastic = document.querySelector('#plastic');

var score = document.querySelector("#trashCleaned");
var scoreCount = 0

var reset = document.querySelector("#reset");
var winPattern = document.querySelector('#winPattern');

trashOpen.addEventListener('mouseover', function() {
  pointer.style.opacity = 1;
  pointer.src = 'images/pointer.png';
  helpText.style.opacity=1;
});

trashOpen.addEventListener('mouseout', function() {
  pointer.style.opacity = 0;
  helpText.style.opacity=0;
  pointer.src = 'images/pointer.png';
});

function allowDrop(ev){
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("src", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("src");
  ev.target.appendChild(document.getElementById(data));

}

// Score Keeping

boot.addEventListener("drop", updateScore);

function updateScore() {
  scoreCount++;
  score.innerHTML = "Score: " + scoreCount;
}

// function draw(){
//   ellipse(50,50,50,50);
// }
