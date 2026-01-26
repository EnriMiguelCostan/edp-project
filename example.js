// const userEmail = document.getElementById("userEmail");
// const emailError = document.getElementById("emailError");

// const userPhone = document.getElementById("userPhone");
// const phoneError = document.getElementById("phoneError");

// const userPassword = document.getElementById("userPassword");
// const passwordError = document.getElementById("passwordError");

const formElement = document.getElementById("signupForm");

formElement.addEventListener("submit", function (e) {
  e.preventDefault();

  // pass the form element to the function
  const isValid = validateSignupForm(formElement);

  if (isValid) {
    alert("Form submitted successfully!");
  }

  formElement.reset();
});

function validateSignupForm(formElement) {
  const email = formElement.querySelector("#userEmail").value.trim();
  const phone = formElement.querySelector("#userPhone").value.trim();
  const password = formElement.querySelector("#userPassword").value.trim();

  const emailError = formElement.querySelector("#emailError");
  const phoneError = formElement.querySelector("#phoneError");
  const passwordError = formElement.querySelector("#passwordError");

  emailError.textContent = "";
  phoneError.textContent = "";
  passwordError.textContent = "";

  let isValid = true;

  // Email validation
  if (!email) {
    emailError.textContent = "Email is required";
    isValid = false;
  } else if (!/^\S+@\S+\.\S+$/.test(email)) {
    emailError.textContent = "Enter a valid email";
    isValid = false;
  }

  // Phone validation
  if (!phone) {
    phoneError.textContent = "Phone number is required";
    isValid = false;
  } else if (!/^\d{11}$/.test(phone)) {
    phoneError.textContent = "Phone must be 11 digits";
    isValid = false;
  }

  // Password validation
  if (!password) {
    passwordError.textContent = "Password is required";
    isValid = false;
  } else if (password.length < 8) {
    passwordError.textContent = "Password must be at least 8 characters";
    isValid = false;
  }

  return isValid;
}
