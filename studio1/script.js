'use strict';
console.log('reading js');

document.addEventListener('submit', processForm);
document.querySelector('#reset').onclick = resetForm;

function processForm() {
  var name = document.getElementById('name').value;
  var verb = document.getElementById('verb').value;
  var adj = document.getElementById('adj').value;
  var noun = document.getElementById('noun').value;
  var creature = document.getElementById('creature').value;


  var myStory = document.querySelector('#myStory');
  var storySection = document.querySelector("#storySection");



  myStory.innerHTML =
    "<p>Long long ago, <em>" + name + "</em> begins their journey in a(n) <em>" +
    adj + " </em>morning, when the <em>" + noun + "</em> came with a big prophecy for them. <em>" + name +
    "</em> had to <em>" + verb + "</em> out of their hometown to set out on this adventure for the sake of saving the world from <em>"
    + creature + "</em>. They head towards their destination and find instead an army of tiny <em>" + creature +
    "</em>! It was revealed that the mastermind was <em>" + noun + "</em> all along and used this prophecy as a ploy! But ultimately <em>" + name + "</em> remained <em>" + adj + "</em> and they <em>"
    + verb + "</em> their fears, saving the world once and for all. With <em>" + noun + "</em> defeated, <em>" + name +
    "</em> made their way home with an adventure that few believed, but they'll always remember that strange adventurer and their whacky story.</p>";

  storySection.className = "show";

  return false;
}

//for drop-down menu
// if (.select == 'cave'){
//
// }

function resetForm() {
  storySection.className = "hide";
}
