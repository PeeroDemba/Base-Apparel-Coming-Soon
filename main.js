"use strict";

const email = document.getElementById("email");
const submit = document.getElementById("submit");
const erroricon = document.getElementById("error");

const msg = document.createElement("p");

function valid(event) {
  var pattern = /^[a-z]{1,50}@[a-z]{3,10}[.]{1}[a-z]{3}$/;
  var str = email.value;
  if (pattern.test(str) == true) {
    erroricon.className = "hide";
    alert("Email Sent");
  } else {
    event.preventDefault();
    var form = document.forms[0];
    msg.innerHTML = "Please provide a valid email";
    msg.style.padding = "0 1.5rem";
    msg.style.fontSize = "0.6rem";
    msg.className = "show";
    erroricon.className = "show";
    form.appendChild(msg);
    setTimeout(msgclear, 100000);
  }
}

function msgclear() {
  msg.className = "hide";
}

submit.addEventListener("click", valid);
email.addEventListener("focus", function () {
  msg.className = "hide";
  erroricon.className = "hide";
});
email.addEventListener("input", function () {
  msg.className = "hide";
  erroricon.className = "hide";
});
