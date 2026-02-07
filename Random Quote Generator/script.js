const quotes = [
  "Choose peace over proving a point",
  "Small steps still move you forward",
  "You are enough just as you are",
  "Happiness grows when gratitude leads",
  "Love yourself like you love others",
  "Progress matters more than perfection",
  "Your effort today builds tomorrow",
  "Smile more life feels lighter",
  "Be kind to your own heart",
  "Slow down and enjoy life",
  "Confidence begins with self trust",
  "Peace starts within not outside",
  "You deserve rest not guilt",
  "Believe in yourself every day",
  "Joy lives in simple moments",
  "Your journey is uniquely yours",
  "Let go and breathe freely",
  "Self love is true power",
  "Growth begins outside comfort zones",
  "Choose happiness every single day",
];

const button = document.querySelector("button");
const quote = document.querySelector("h1");

button.addEventListener("click", () => {
  const index = Math.floor(Math.random() * 21);
  quote.textContent = quotes[index];
});
