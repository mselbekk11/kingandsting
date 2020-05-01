// // Get the container element
const btnContainer = document.getElementById("myDIV");
// // Get all buttons with class="btn" inside the container
const btns = btnContainer.getElementsByClassName("boom");
// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    // Add the active class to the current/clicked button
    this.className += " active";
  });
}

// // Get the container element
const btnContainerTwo = document.getElementById("myDIVtwo");
// // Get all buttons with class="btn" inside the container
const btnsTwo = btnContainerTwo.getElementsByClassName("boomtwo");
// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btnsTwo.length; i++) {
  btnsTwo[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    // Add the active class to the current/clicked button
    this.className += " active";
  });
}

// // Get the container element
const btnContainerThree = document.getElementById("myDIVthree");
// // Get all buttons with class="btn" inside the container
const btnsThree = btnContainerThree.getElementsByClassName("boomthree");
// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btnsThree.length; i++) {
  btnsThree[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    // Add the active class to the current/clicked button
    this.className += " active";
  });
}

console.log("checking");
