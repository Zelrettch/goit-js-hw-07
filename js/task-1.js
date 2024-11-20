"use strict";

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

const nodesArr = getChildNodes();
console.log(`Number of categories: ${nodesArr.length}`);
showItemsInfo(nodesArr);
