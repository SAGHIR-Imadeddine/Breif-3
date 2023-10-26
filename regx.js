const email = document.getElementById('email');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const phone = document.getElementById('phonenumber');
const cin = document.getElementById('cin');
const form = document.getElementById('form');

form.addEventListener('submit', function (event) {
  if (!checkRegEx(email.value, emailRegex) ||
      !checkRegEx(firstname.value, nameRegex) ||
      !checkRegEx(lastname.value, nameRegex) ||
      !checkRegEx(phone.value, phoneRegex) ||
      !checkRegEx(cin.value, cinRegex)) {
    event.preventDefault();
  }
});

function checkRegEx(value, regex) {
  if (regex.test(value)) {
    return true;
  } else {
    alert("Invalid input: " + value);
    return false;
  }
}

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const nameRegex = /^[A-Za-z]{3,}$/;
const phoneRegex = /^\+212[67]\d{8}$/;
const cinRegex = /^[A-Z]{2}\d{5,6}$/;
