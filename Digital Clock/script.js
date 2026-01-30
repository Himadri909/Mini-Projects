function updateClock() {
  let now = new Date();
  let hours = now.getHours();
  let mintues = now.getMinutes();
  let seconds = now.getSeconds();

  hours = hours < 10 ? "0" + hours : hours;
  mintues = mintues < 10 ? "0" + mintues : mintues;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById("hours").innerText = hours;
  document.getElementById("mintues").innerText = mintues;
  document.getElementById("seconds").innerText = seconds;
}
setInterval(updateClock, 1000);

updateClock();
