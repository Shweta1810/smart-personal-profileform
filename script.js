// Date and Time
function updateDateTime() {
  const now = new Date();
  document.getElementById('datetime').textContent = now.toLocaleString();
}
setInterval(updateDateTime, 1000);
updateDateTime();

// Form inputs
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const bio = document.getElementById('bio');
const hobbie = document.getElementById('hobbie');
const tourist = document.getElementById('tourist');
const profilePic = document.getElementById('profilePic');

// Preview elements
const prevName = document.getElementById('prevName');
const prevEmail = document.getElementById('prevEmail');
const prevPhone = document.getElementById('prevPhone');
const prevBio = document.getElementById('prevBio');
const prevHobbies = document.getElementById('prevHobbies');
const prevTourist = document.getElementById('prevTourist');
const prevPic = document.getElementById('prevPic');

// Update preview
function updatePreview() {
  prevName.textContent = name.value || "--";
  prevEmail.textContent = email.value || "--";
  prevPhone.textContent = phone.value || "--";
  prevBio.textContent = bio.value || "--";
  prevHobbies.textContent = hobbie.value || "--";
  prevTourist.textContent = tourist.value || "--";
}

[name, email, phone, bio, hobbie, tourist].forEach(field =>
  field.addEventListener('input', updatePreview)
);

// Profile picture preview
profilePic.addEventListener('change', () => {
  const file = profilePic.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = e => (prevPic.src = e.target.result);
    reader.readAsDataURL(file);
  }
});

// Phone Validation
const phoneError = document.getElementById('phoneError');
phone.addEventListener('input', () => {
  phone.value = phone.value.replace(/[^0-9]/g, '').slice(0, 10);
  if (/^[1-9][0-9]{9}$/.test(phone.value)) {
    phoneError.style.display = 'none';
  } else if (phone.value.length > 0) {
    phoneError.style.display = 'block';
  } else {
    phoneError.style.display = 'none';
  }
  updatePreview();
});

// Form submission
document.getElementById('profileForm').addEventListener('submit', function (e) {
  e.preventDefault();
  if (!/^[1-9][0-9]{9}$/.test(phone.value)) {
    alert('Incorrect phone number format.');
    return;
  }
  alert('Form submitted successfully!');
  this.reset();
  prevPic.src = "https://via.placeholder.com/120"; // reset image
  updatePreview();
});
