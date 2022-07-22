const img = document.querySelector("img");

function callback(e) {
  console.log(this);
  console.log(this.getAttribute("src"));
}

img.addEventListener("click", callback);
