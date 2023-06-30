"use strict";

const email = document.getElementById("email");
const submit = document.getElementById("submit");
const erroricon = document.getElementById("error");
const card1 = document.getElementById("card1");

const msg = document.createElement("p");

function valid(event) {
  var pattern = /^[a-z]{1,50}@[a-z]{3,10}[.]com$/;
  var str = email.value;
  if (pattern.test(str) == true) {
    erroricon.className = "hide";
    alert("Email Sent");
  } else {
    event.preventDefault();
    msg.innerHTML = "Please provide a valid email";
    msg.style.padding = "0 1.5rem";
    msg.style.fontSize = "0.6rem";
    msg.className = "show";
    erroricon.className = "show";
    card1.appendChild(msg);
  }
}

submit.addEventListener("click", valid);
email.addEventListener("focus", function () {
  msg.className = "hide";
  erroricon.className = "hide";
});

