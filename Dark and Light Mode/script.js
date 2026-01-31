const themeicon = document.getElementById("theme-icon");

themeicon.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeicon.classList.remove("fa-moon");
    themeicon.classList.add("fa-sun");
  } else {
    themeicon.classList.remove("fa-sun");
    themeicon.classList.add("fa-moon");
  }
});
