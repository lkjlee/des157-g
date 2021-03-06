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

var score = document.querySelector('#trashCleaned');
var scoreCount = 0;

var reset = document.querySelector('#reset');
var winPattern = document.querySelector('#winPattern');

winPattern.style.display = 'none';

trashOpen.addEventListener('mouseover', function() {
  pointer.style.opacity = 1;
  pointer.src = 'images/pointer.png';
  helpText.style.opacity = 1;
  if (scoreCount == '6') {
    pointer.style.display = 'none';
    helpText.style.display = 'none';
  }
});

trashOpen.addEventListener('mouseout', function() {
  pointer.style.opacity = 0;
  helpText.style.opacity = 0;
  pointer.src = 'images/pointer.png';
});

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData('src', ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData('src');
  ev.target.appendChild(document.getElementById(data));
  scoreCount++;
  score.innerHTML = "Trash Left <br>" + scoreCount + " /6";
  if (scoreCount == '6') {
    slugSad.src = 'images/slugHappy.gif';
    winPattern.style.display = 'block';
    score.style.display = 'none';
  }
}
