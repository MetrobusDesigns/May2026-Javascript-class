// account form card
//
const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', function() {
const username = document.getElementById('username').value.trim();
const email = document.getElementById('email').value.trim();
const password = document.getElementById('password').value;
const confirmPassword = document.getElementById('confirm-password').value;

  if (username.length < 3) {
    alert('Username must be at least 3 characters');
    return}
  if (!email.includes('@')) {
    alert('Please enter a valid email address');
    return}
  if (password.length < 4) {
    alert('Password must be at least 4 characters.')
    return;}
if (password !== confirmPassword) {alert('Passwords do not match. Please try again');
    return;}
  alert(`Account sucessfully created!\nUsername: ${username}\nEmail: ${email}`);
});