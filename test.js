// ------------------- Validate Email or Phone -------------------
function validateEmailOrPhone(input) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
  const phoneRegex = /^[0-9]{6,15}$/; // 6-15 digits
  return emailRegex.test(input) || phoneRegex.test(input);
}

// ------------------- Login Button -------------------
document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const input = document.querySelector('input[name="email"]').value.trim();
  const password = document.querySelector('input[name="password"]').value.trim();

  if (!input || !password) {
    alert('❌ Please enter email/phone and password');
    return;
  }

  if (!validateEmailOrPhone(input)) {
    alert('❌ Invalid email or phone number');
    return;
  }

  if (password.length < 6) {
    alert('❌ Password is too short (min 6 characters)');
    return;
  }

  // Redirect user to YouTube
  window.location.href = "https://www.youtube.com/watch?v=Mc9jE1O4A4U&list=RDMc9jE1O4A4U&start_radio=1";
});

// ------------------- Signup Button -------------------
document.getElementById('signup-btn').addEventListener('click', function() {
  const input = document.querySelector('input[name="email"]').value.trim();
  const password = document.querySelector('input[name="password"]').value.trim();

  if (!input || !password) {
    alert("❌ Please enter email/phone and password");
    return;
  }

  if (!validateEmailOrPhone(input)) {
    alert('❌ Invalid email or phone number');
    return;
  }

  if (password.length < 6) {
    alert('❌ Password is too short (min 6 characters)');
    return;
  }

  // Send data to server
  fetch('http://localhost:3000/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `email=${encodeURIComponent(input)}&password=${encodeURIComponent(password)}`
  })
  .then(res => res.text())
  .then(msg => alert(msg))
  .catch(err => alert('❌ Error connecting to the server'));
});
