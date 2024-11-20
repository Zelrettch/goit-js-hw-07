"use strict";

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

createChangeEvent();
