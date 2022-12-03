let buttonDom = document.getElementsByClassName("akordiyon");

for (let i = 0; i < buttonDom.length; i++) {
  buttonDom[i].onclick = function () {
    let panel = this.nextElementSibling;
    this.lastElementChild.classList.toggle("fa-arrow-up");

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  };
}
