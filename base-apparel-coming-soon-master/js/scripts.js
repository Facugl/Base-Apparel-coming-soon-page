const input = document.getElementById('email');
const sendBtn = document.getElementById('btn-submit');
const errorIcon = document.getElementById('error-icon');
const textError = document.getElementById('text-error');

const emailValidation = /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/;


const timeoutFunc = setInterval(() => {
  errorIcon.style.display = "none";
  textError.style.display = "none";
},3000);

sendBtn.addEventListener('click', function() {
  if(input.value.length === 0 || !input.value.match(emailValidation)) {
    errorIcon.style.display = "block";
    textError.style.display = "block";
    return timeoutFunc;
  } else {
    textError.style.display = "block";
    textError.style.color = "green";
    textError.textContent = "Thank you!";
    return timeoutFunc;
  }
});