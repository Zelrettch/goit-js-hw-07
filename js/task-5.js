function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function addSwitchColorEvent() {
  const body = document.querySelector("body");
  const textField = document.querySelector(".widget .color");
  const changeButton = document.querySelector(".widget .change-color");

  changeButton.addEventListener("click", () => {
    const color = getRandomHexColor();
    body.style.backgroundColor = color;
    textField.textContent = color;
    changeButton.blur();
  });
}

addSwitchColorEvent();
