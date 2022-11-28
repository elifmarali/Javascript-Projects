let addButtonDom = document.querySelector("#addButton");
let inputDom = document.querySelector("#inputText");
let titleDom = document.querySelector("#head");
let toDoContainerDom = document.querySelector("#toDoContainer");
let clearButton = document.querySelector("#clearButton");
titleDom.style.color = "red";

addButtonDom.addEventListener("click", function () {
  let newParagraph = document.createElement("p");
  toDoContainerDom.appendChild(newParagraph);
  newParagraph.innerHTML = inputDom.value;
  inputDom.value = "";
  newParagraph.classList.add("listType");
  newParagraph.addEventListener("click", function () {
    newParagraph.style.textDecoration = "line-through";
  });
  newParagraph.addEventListener("dblclick", function () {
    toDoContainerDom.removeChild(this);
  });
  clearButton.addEventListener("click", function () {
    newParagraph.remove();
  });
});
