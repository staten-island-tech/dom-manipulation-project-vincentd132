const DOMSelectors = {
  form: document.getElementById("form"),
  pop: document.getElementById("pop"),
};

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();

  const songname = document
    .querySelector("input[name='songname']")
    .value.trim();

  DOMSelectors.pop.querySelector(".popup").innerHTML = "";

  DOMSelectors.pop.querySelector(".popup").insertAdjacentHTML(
    "beforeend",
    `
      <span class="close-btn">&times;</span> <!-- Close button -->
      <h1 id="card-header">${songname}</h1>
      <img id="card-image" src="${songimg}" alt="Song Image" onerror="this.onerror=null; this.src='path/to/default-image.jpg';" />
    `
  );

  DOMSelectors.pop.style.display = "block";
});

DOMSelectors.pop.addEventListener("click", function (event) {
  if (event.target.classList.contains("close-btn")) {
    DOMSelectors.pop.style.display = "none";
    location.reload();
  }
});
