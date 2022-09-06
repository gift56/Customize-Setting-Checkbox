let body = document.querySelector("body");

dark.onclick = function () {
  if (dark.checked === true) {
    body.classList.add("darkMode");
  } else {
    body.classList.remove("darkMode");
  }
};
