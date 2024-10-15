const DOMSelectors = {
  form: document.getElementById("songname"),
  form: document.getElementById("songimg"),
  form: document.getElementById("button"),
};

document.getElementById("button").addEventListener("click", function () {
  alert("Button was clicked!");
});
function backgroundAndText(background, text) {
  background.style.backgroundColor = "red";
}

document.getElementById("button").addEventListener("click", function () {
  backgroundAndText(DOMSelectors, DOMSelectors.box);
});
