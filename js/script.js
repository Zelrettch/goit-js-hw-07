"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function getChildNodes() {
  const node = document.querySelector("#categories");
  const childNodesArr = Array.from(node.childNodes);
  return childNodesArr.filter(
    (node) => node.classList && node.classList.contains("item")
  );
}

function showItemsInfo(items) {
  items.forEach((element) => {
    const nodes = Array.from(element.childNodes);
    nodes.forEach((node) => {
      if (node.nodeName === "H2") {
        console.log(`Category: ${node.textContent}`);
      } else if (node.nodeName === "UL") {
        const elementsCount = Array.from(node.childNodes).filter(
          (node) => node.nodeName === "LI"
        ).length;
        console.log(`Elements: ${elementsCount}`);
      }
    });
  });
}

function insertImages(images) {
  const galery = document.querySelector(".gallery");

  const elements = images.map((image) => {
    const liNode = document.createElement("li");
    const imgNode = document.createElement("img");

    imgNode.src = image.url;
    imgNode.alt = image.alt;
    liNode.append(imgNode);

    return liNode;
  });
  galery.append(...elements);
}

function createChangeEvent() {
  const textInputNode = document.querySelector(".text-field-section input");
  const textOutputNode = document.querySelector("#name-output");

  textInputNode.addEventListener("input", (event) => {
    const text = event.currentTarget.value.trim();

    if (text) {
      textOutputNode.textContent = text;
      return;
    }
    textOutputNode.textContent = "Anonymous";
  });
}

function addSubmitFormEvent() {
  const form = document.querySelector(".login-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = {
      email: form.elements.email.value.trim(),
      password: form.elements.password.value.trim(),
    };

    if (!data.email || !data.password) {
      window.alert("All form fields must be filled in");
      return;
    }

    console.log(data);
    form.reset();
  });
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

// Task1

const nodesArr = getChildNodes();
console.log(`Number of categories: ${nodesArr.length}`);
showItemsInfo(nodesArr);

// Task2

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  },
];

insertImages(images);

// Task3

createChangeEvent();

// Task4

addSubmitFormEvent();

// Task5

addSwitchColorEvent();

// Task6

addCollectionEvents();
