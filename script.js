let storyOpening = document.querySelector(".story-opening");
let buttons = document.querySelector(".buttons");
let startHelp = document.querySelector(".startHelp");
let badBox = document.querySelector(".badBox");
let goodBox = document.querySelector(".goodBox");
let option1 = document.querySelector(".option-one-screen");
let badOpen = document.querySelector(".badOpen");
let tryAgain = document.querySelector(".tryAgain");
let option1End = document.querySelector(".option-one-end");
let option2 = document.querySelector(".option-two-screen");
let goodOpen = document.querySelector(".goodOpen");
let mapButton = document.querySelector(".mapButton");
let option21 = document.querySelector(".option-two-one");
let option22 = document.querySelector(".option-two-two");
let openFridge = document.querySelector(".fridge");
let option23 = document.querySelector(".option-two-three");
let giveBoba = document.querySelector(".giveBoba");
let option24 = document.querySelector(".option-two-four");
let happyBear = document.querySelector(".happyBear");
let option2End = document.querySelector(".option-two-end");
let byeBye = document.querySelector(".byeBye");
let storyEnd = document.querySelector(".storyEnd");
let sleepBear = document.querySelector(".sleepBear");
let blankSpace = document.querySelector(".blank");
let clickMe = document.querySelector(".clickMe");

startHelp.onclick = function() {
    buttons.style.display = "block";
    storyOpening.style.display = "none";
};

badBox.onclick = function() {
    option1.style.display = "block";
    buttons.style.display = "none";
};

badOpen.onclick = function() {
    option1End.style.display = "block";
    option1.style.display = "none";
};

tryAgain.onclick = function() {
    buttons.style.display = "block";
    option1End.style.display = "none";
};

goodBox.onclick = function() {
    option2.style.display = "block";
    buttons.style.display = "none";
};

goodOpen.onclick = function() {
    option21.style.display = "block";
    goodBox.style.display = "none";
    option2.style.display = "none";
};

mapButton.onclick = function() {
    option22.style.display = "block";
    goodOpen.style.display = "none";
    option2.style.display = "none";
    option21.style.display = "none";
};

openFridge.onclick = function() {
    option23.style.display = "block";
    option22.style.display = "none";
};

giveBoba.onclick = function() {
    option24.style.display = "block";
    option23.style.display = "none";
};

happyBear.onclick = function() {
    option2End.style.display = "block";
    option24.style.display = "none";
};

byeBye.onclick = function() {
    storyEnd.style.display = "block";
    option2End.style.display = "none";
};

clickMe.onclick = function() {
   blankSpace.innerHTML="Bye!!! Hope you have a great day";
   clickMe.style.display = "none";
};