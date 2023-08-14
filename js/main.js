var tabContents = document.querySelectorAll(".tab-content");
var tabLinks = document.querySelectorAll(".tab-titles .tab-links");
function tabOpen(tabname) {
  for (var tabLink of tabLinks) {
    tabLink.classList.remove("active-link");
  }
  for (var tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
  }
  (function eventTarget(e) {
    const button = event.target;
    button.classList.add("active-link");
  })();
  document.getElementById(tabname).classList.add("active-tab");
}
// -----------small-screen------
var navBars = document.querySelector("#header nav .fa-solid.fa-bars");
var xIcon = document.querySelector("#header nav ul .fa-solid");
var navUl = document.querySelector("#header nav ul");
function viewNB() {
  navUl.classList.toggle("Active");
  navBars.style.display = "none";
}
function hideNB() {
  navUl.classList.toggle("Active");
  navBars.style.display = "block";
}
navBars.addEventListener("click", viewNB);
xIcon.addEventListener("click", hideNB);

// ---------contact us-------------
const scriptURL = 'https://script.google.com/macros/s/AKfycbzj8q5cae2NTdSIFg5m2XXJVT0bG1-4ClAOlrzT7nAmzyrw6H5tXuKvFmwoilUXuQme/exec';
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", e => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then(response => {
      form.reset(); // Reset the form before displaying the message
      msg.innerHTML = "Message sent successfully.";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
    })
    .catch(error => console.error("Error!", error.message));
});

