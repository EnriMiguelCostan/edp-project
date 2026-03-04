// MouseEvent
const clickBtn = document.getElementById("clickBtn");

// clickBtn.addEventListener("click", (e) => {
//   console.log("MouseEvent", e);
// });

// clickBtn.addEventListener("keydown", (e) => {
//   console.log("Keyboard Event", e.target.id);
// });

// clickBtn.addEventListener("click", (e) => {
//   console.log("MouseEvent", e.srcElement.textContent);
// });

// clickBtn.addEventListener("contextmenu", (e) => {
//   console.log("MouseEvent", e.type);
// });

// clickBtn.addEventListener("mousemove", (e) => {
//   console.log("MouseEvent", e.type);
// });

// KeyboardEvent
const textInput = document.getElementById("textInput");
textInput.addEventListener("keyup", (e) => {
  console.log("KeyboardEvent", e.srcElement.value);
});
textInput.addEventListener("input", (e) => {
  console.log("InputEvent", e.constructor.name);
});

// FocusEvent: focus and blur
textInput.addEventListener("focus", (e) => {
  console.log("FocusEvent focus", e.constructor.name);
});
textInput.addEventListener("blur", (e) => {
  console.log("FocusEvent blur", e.constructor.name);
});

// PointerEvent: clicking / touching div
const hoverBox = document.getElementById("hoverBox");
hoverBox.addEventListener("pointerdown", (e) => {
  console.log("PointerEvent", e.srcElement.innerHTML);
});

// CustomEvent: triggered by custom button
const customBtn = document.getElementById("customBtn");
document.addEventListener("userLoggedIn", (e) => {
  console.log("CustomEvent", e.constructor.name, "detail:", e.detail);
});
customBtn.addEventListener("click", () => {
  const event = new CustomEvent("userLoggedIn", {
    detail: { username: "student123" },
  });
  document.dispatchEvent(event);
});
