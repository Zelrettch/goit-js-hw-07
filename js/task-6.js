function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(quantity) {
  const boxes = [];

  for (let i = 0; i < quantity; i++) {
    const size = `${30 + i * 10}px`;
    const node = document.createElement("div");
    node.style.backgroundColor = getRandomHexColor();
    node.style.width = size;
    node.style.height = size;
    node.style.flexShrink = 0;
    boxes.push(node);
  }
  return boxes;
}

function destroyBoxes(canvas, inputField) {
  inputField.value = "";
  canvas.innerHTML = "";
}

function addCollectionEvents() {
  const createBtn = document.querySelector(".controls-block .blue-button");
  const destroyBtn = document.querySelector(".controls-block .red-button");
  const inputField = document.querySelector(".controls-block input");
  const canvas = document.querySelector(".boxes-block");

  canvas.append(...createBoxes(5));

  createBtn.addEventListener("click", () => {
    const quantity = Number(inputField.value);
    if (!quantity || quantity > 100) {
      window.alert("Numbers should be in range from 1 to 100");
      return;
    }
    destroyBoxes(canvas, inputField);
    canvas.append(...createBoxes(quantity));
    createBtn.blur();
  });

  destroyBtn.addEventListener("click", () => {
    destroyBoxes(canvas, inputField);
    destroyBtn.blur();
  });
}

addCollectionEvents();
