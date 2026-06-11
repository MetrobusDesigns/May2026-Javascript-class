// console.log("testing");

// let input = document.getElementById("user-input");
// let form = document.querySelector("form");

// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     window.prompt(`hello ${input.value}`);
//     alert(input.value);
//     input.value = "";
// });

// const submitBtn = document.getElementById('submit-btn');
//
// hair appointment scheduler
// 
submitBtn.addEventListener('click', function() {
//console.log ()
  const date = document.getElementById('haircut-date').value;
  const haircutter = document.getElementById('haircutter').value.trim();
  const hairLength = document.querySelector('input[name="hair-length"]:checked');

  if (!date) {
    alert('Please select a date for your appointment.');
    return;
  }
  if (!haircutter) {
    alert('Please enter a preferred haircutter.');
    return;
  }
  if (!hairLength) {
    alert('Please select your hair length.');
    return;
  }

  const formattedDate = new Date(date + 'T00:00:00').toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  alert(`hello ${userName}, your haircut is scheduled for ${formattedDate} with ${haircutter} for ${hairLength.value} hair.`);

});
//
// account form card
//
const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', function() {

  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  if (username.length < 3) {
    alert('Username must be at least 3 characters.');
    return;
  }
  if (!email.includes('@')) {
    alert('Please enter a valid email address.');
    return;
  }
  if (password.length < 4) {
    alert('Password must be at least 4 characters.');
    return;
  }
  if (password !== confirmPassword) {
    alert('Passwords do not match. Please try again.');
    return;
  }

  alert(`Account created!\nUsername: ${username}\nEmail: ${email}`);

});