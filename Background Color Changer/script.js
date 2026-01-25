let btn = document.getElementById("changeBGcolor");
let body = document.querySelector("body");

function getrandomColor() {
  let str = "0123456789abcdef";
  let color = "#";
  for (let i = 1; i <= 6; i++) {
    color += str[Math.floor(Math.random() * 16)];
  }
  return color;
}

btn.addEventListener("click", function () {
  body.style.backgroundColor = getrandomColor();
});
