// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?

document.addEventListener("DOMContentLoaded", function () {
  let saveButtons = document.querySelectorAll(".saveBtn");

  saveButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      let timeBlockId = this.parentElement.id;
      let description = this.previousElementSibling.value;

      localStorage.setItem(timeBlockId, description);
    });
  });

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  function updateHourClasses() {
    let currentHour = dayjs().hour();

    let timeBlocks = document.querySelectorAll(".time-block");
    timeBlocks.forEach(function (timeBlock) {
      let timeBlockHour = parseInt(timeBlock.id.split("-")[1]);
      if (timeBlockHour < currentHour) {
        timeBlock.classList.add("past");
        timeBlock.classList.remove("present", "future");
      } else if (timeBlockHour === currentHour) {
        timeBlock.classList.add("present");
        timeBlock.classList.remove("past", "future");
      } else {
        timeBlock.classList.add("future");
        timeBlock.classList.remove("past", "present");
      }
    });
  }

  updateHourClasses();

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  function setSavedDescriptions() {
    let timeBlocks = document.querySelectorAll(".time-block");
    timeBlocks.forEach(function (timeBlock) {
      let timeBlockId = timeBlock.id;
      let description = localStorage.getItem(timeBlockId);
      if (description) {
        timeBlock.querySelector(".description").value = description;
      }
    });
  }

  setSavedDescriptions();

  // TODO: Add code to display the current date in the header of the page.

  function displayCurrentDate() {
    let currentDate = dayjs().format("dddd, MMMM D, YYYY");
    document.getElementById("currentDay").textContent = currentDate;
  }

  displayCurrentDate();
});
