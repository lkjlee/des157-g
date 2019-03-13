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
  ev.dataTransfer.setData('src', ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData('src');
  ev.target.appendChild(document.getElementById(data));
}

// function dateSearch () {
//   var d = new Date('date2');
//   var n = d.getDate();
// }

function newPost() {
  var newAdd = document.createElement("addNew");
  newAdd.setAttribute("type", "date");
  // new.setAttribute("value", "2014-02-09");
  document.body.appendChild(newAdd);
}

// Idea: Add button now creates a new pop-up that goes on top of the list, rather than a menu overlay
