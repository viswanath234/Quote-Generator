const quote = document.getElementById("quote");
const author = document.getElementById("author");
const button = document.getElementById("btn");

const api_url = "https://api.quotable.io/random";

async function getquote(url) {
  const response = await fetch(url);
  var data = await response.json();
  quote.innerHTML = data.content;
  author.innerHTML = data.author;
}

function handleClick() {
  getquote(api_url);
}

button.addEventListener("click", handleClick);

getquote(api_url);
