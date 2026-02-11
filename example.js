// state → render → UI → event → state → render → UI

let state = {
  email: "",
  phoneNumber: "",
  password: "",
};

const form = document.getElementById("signupForm");

function setState(newState) {
  state = { ...state, ...newState };
  render();
}

function handleInput(event) {
  const { name, value } = event.target;

  setState({
    [name]: value,
  });
}

document
  .querySelectorAll("#signupForm input")
  .forEach((input) => input.addEventListener("input", handleInput));

function render() {
  if (state.email === "") {
    emailError.textContent = "Email is required!";
  } else if (!isValidEmail(state.email)) {
    emailError.textContent = "Invalid email format!";
  } else {
    emailError.textContent = "";
  }

  if (state.phoneNumber === "") {
    phoneError.textContent = "Phone number is required!";
  } else if (!/^\d{11}$/.test(state.phoneNumber)) {
    phoneError.textContent = "Phone must be 11 digits";
  } else {
    phoneError.textContent = "";
  }

  if (state.password.length < 8) {
    passwordError.textContent = "Password must be at least 8 characters";
  } else if (!/\d/.test(state.password)) {
    passwordError.textContent = "Password must contain a number";
  } else {
    passwordError.textContent = "";
  }
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  console.log("Submitted State:", state);

  localStorage.setItem("signupData", JSON.stringify(state));

  alert("Form data saved using state!");
});

// difference if using FormData alone
// input.addEventListener("input", () => {
//   const data = new FormData(form);
//   console.log(data.get("email"));
// });
