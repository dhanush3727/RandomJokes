const para = document.querySelector(".para");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  fetch(
    "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"
  )
    .then((data) => data.json())
    .then((item) => (para.textContent = item.joke));
});
