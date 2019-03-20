'use strict';
console.log('reading.js');

var exit = document.querySelector('#exit');
var popUp = document.querySelector('#popUp');
var addNew = document.querySelector('#addNew');

var topNav = document.querySelector('#topNav');
var name = document.querySelector('#name');
var menu = document.querySelector('#menu');

var dateControl1 = document.querySelector('#date1');
dateControl1.value = '2019-01-01';

var dateControl2 = document.querySelector('#date2');
dateControl2.value = '2019-01-01';

var dateControl3 = document.querySelector('#date3');
dateControl3.value = '2019-01-01';

setTimeout(function() {
  alert("Make sure to save a screenshot on your mobile device!");
}, 10000);

addNew.addEventListener('click', function() {
  exit.style.display = 'block';
  popUp.style.display = 'block';
  exit.className = "show";
  popUp.className = "show";
});

exit.addEventListener('click', function() {
  popUp.style.display = 'none';
  exit.style.display = 'none';
});

var bgColor1 = document.querySelector('#bg1');
var bgColor2 = document.querySelector('#bg2');
var bgColor3 = document.querySelector('#bg3');
var bgColor4 = document.querySelector('#bg4');
var bgColor5 = document.querySelector('#bg5');


bgColor1.addEventListener('click', function() {
  document.body.style.backgroundColor = "#ffad98";
});
bgColor2.addEventListener('click', function() {
  document.body.style.backgroundColor = "#ffbadf";
});
bgColor3.addEventListener('click', function() {
  document.body.style.backgroundColor = "#b5e1fc";
});
bgColor4.addEventListener('click', function() {
  document.body.style.backgroundColor = "#f7dead";
});
bgColor5.addEventListener('click', function() {
  document.body.style.backgroundColor = "#9dd68f";
});

var draggables = document.querySelector('#draggables');

var desk = document.querySelector('#class');
var eat = document.querySelector('#eat');
var shop = document.querySelector('#shop');
var study = document.querySelector('#study');
var tv = document.querySelector('#tv');
var work = document.querySelector('#work');

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
