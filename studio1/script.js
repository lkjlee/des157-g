'use strict';
console.log('reading js');
document.addEventListener('submit', processForm);
document.querySelector('#reset').onclick = resetForm;
document.querySelector('#place').onclick = setting;
document.getElementById('submit').value = "Let's go!";
document.getElementById('reset').value = "Fresh page";
var randomPlace = new Array("images/cave.png", "images/sea.png", "images/castle.png", "images/grave.png");

function setting() {
  var randomNum = Math.floor(Math.random() * randomPlace.length);
  document.getElementById("cave").src = randomPlace[randomNum];
}

function processForm() {
  var name = document.getElementById('name').value;
  var verb = document.getElementById('verb').value;
  var adj = document.getElementById('adj').value;
  var noun = document.getElementById('noun').value;
  var creature = document.getElementById('creature').value;

  var myStory = document.querySelector('#myStory');
  var storySection = document.querySelector("#storySection");

  myStory.innerHTML =
    "<p>Long long ago, <em>" + name + "</em> began their journey on one <em>" +
    adj + " </em>morning, when the <em>" + noun + "</em> came to their house with a big prophecy. <em>" + name +
    "</em> had to <em>" + verb + "</em> out of their hometown to go on this adventure in order to save the world from <em>" +
    creature + "</em>. They head towards their destination but instead find an army of tiny <em>" + creature +
    "</em> ! It was revealed that the mastermind was their mentor, the <em>" + noun + "</em> all along! But ultimately <em>" + name + "</em> remained <em>" + adj + "</em> as they <em>" +
    verb + "</em> both the <em>" + noun + "</em> and their fears, managing to barely save the world once and for all! With the <em>" + noun + "</em> soundly defeated, <em>" + name +
    "</em> made their way home with an adventure that few believed, but with a story to remember forever.</p>";

  storySection.className = "show";

  return false;
}

function resetForm() {
  storySection.className = "hide";
  var randomNum = Math.floor(Math.random() * randomPlace.length);
  document.getElementById("grave").src = randomPlace[randomNum];
}
