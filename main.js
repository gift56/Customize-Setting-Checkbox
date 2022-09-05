let body = document.querySelector("body");
let dark = document.getElementById("dark");

dark.onclick = function () {
  if (dark.checked === true) {
    body.classList.add("darkMode")
  }
};
