"use strict";

function getChildNodes(node, className) {
  const childNodesArr = Array.from(node.childNodes);
  return childNodesArr.filter(
    (node) => node.classList && node.classList.contains(className)
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

const nodesArr = getChildNodes(document.querySelector("#categories"), "item");
console.log(`Number of categories: ${nodesArr.length}`);
showItemsInfo(nodesArr);

function insertImages(images, galery) {
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

insertImages(images, document.querySelector(".gallery"));

function createChangeEvent(textInputNode, textOutputNode) {
  textInputNode.addEventListener("input", (event) => {
    const text = event.currentTarget.value.trim();
    if (text) {
      textOutputNode.textContent = text;
      return;
    }
    textOutputNode.textContent = "Anonymous";
  });
}

createChangeEvent(
  document.querySelector(".text-field-section input"),
  document.querySelector("#name-output")
);

function addSubmitFormEvent(form) {
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

addSubmitFormEvent(document.querySelector(".login-form"));

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
