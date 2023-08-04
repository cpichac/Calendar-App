// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

let timeEl = document.querySelectorAll("i");
let buttonEl = document.querySelector(".btn");
let textEl = document.querySelectorAll(".description");
let timeBlock = document.querySelectorAll(".time-block")
let hour9 = document.querySelector("#a9");
let hour10 = document.querySelector("#a10");
let hour11 = document.querySelector("#a11");
let hour12 = document.querySelector("#a12");
let hour13 = document.querySelector("#a13");
let hour14 = document.querySelector("#a14");
let hour15 = document.querySelector("#a15");
let hour16 = document.querySelector("#a16");
let hour17 = document.querySelector("#a17");







buttonEl.addEventListener("click", function(event) {
  event.preventDefault();
  
  for (let i = 0; i < textEl.length; i++) {
    
    let toDo = localStorage.setItem(timeEl[i].dataset.time, textEl[i].value)
  }

  


})


for (let i = 0; i < timeEl.length; i++) {
  // console.log(timeEl[i].dataset.time);
  if (timeEl[i].dataset.time < dayjs().hour("HH")){
    timeBlock[i].classList.replace("present", "past") || timeBlock[i].classList.replace("future", "past");
  }
  else if(timeEl[i].dataset.time > dayjs().hour("HH")){
    timeBlock[i].classList.replace("past", "future") || timeBlock[i].classList.replace("present", "future");
  }
  else if (timeEl[i].dataset.time === dayjs().hour("HH")){
    timeBlock[i].classList.replace("past", "present") || timeBlock[i].classList.replace("future", "present");
  }

}
for (let i = 0; i < textEl.length; i++) {

}


// console.log(timeEl[count].dataset.time);


$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
 

  
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
