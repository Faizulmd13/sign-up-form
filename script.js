const first = document.querySelector("#first-name");
const second = document.querySelector("#second-name");
const email = document.querySelector("#email");
const pw = document.querySelector("#pw");
const pwc = document.querySelector("#pw-c");
const form = document.querySelector(".signup-form");

first.addEventListener("input", function () {
  if (first.value !== "") {
    first.style.borderColor = "green";
  }
});

second.addEventListener("input", function () {
  if (second.value !== "") {
    second.style.borderColor = "green";
  }
});

pwc.addEventListener("input", function () {
  if (pwc.value !== pw.value) {
    pwc.style.borderColor = "red";
  } else {
    pwc.style.borderColor = "green";
  }
});

pw.addEventListener("input", function () {
  if (!validatePw(pw)) {
    pw.style.borderColor = "red";
  } else {
    pw.style.borderColor = "green";
  }
});

email.addEventListener("input", function () {
  if (!validateEmail(email.value)) {
    email.style.borderColor = "red";
  } else {
    email.style.borderColor = "green";
  }
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let valid = true;

  if (first.value === "") {
    first.style.borderColor = "red";
    valid = false;
  } else {
    first.style.borderColor = "green";
  }

  if (second.value === "") {
    second.style.borderColor = "red";
    valid = false;
  } else {
    second.style.borderColor = "green";
  }

  if (!validateEmail(email.value)) {
    email.style.borderColor = "red";
    email.focus();
    valid = false;
  } else {
    email.style.borderColor = "green";
  }

  if (pw.value !== pwc.value) {
    pwc.style.borderColor = "red";
    pwc.focus();
    valid = false;
  } else {
    pwc.style.borderColor = "green";
  }

  if (!validatePw(pw)) {
    pw.style.borderColor = "red";
    pw.focus();
    valid = false;
  } else {
    pwc.style.borderColor = "green";
  }

  if (valid) {
    alert("Form submitted successfully!");
    form.submit();
  }
});

function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function validatePwPattern(password) {
  const passwordPattern = /^(?=.*[A-Z])(?=.*\d).+$/;
  return passwordPattern.test(password);
}

function validatePw(passwordInput) {
  const length = passwordInput.value.length;
  if (validatePwPattern(passwordInput.value) && length > 7) {
    return true;
  } else {
    return false;
  }
}
