import "./style.css";
const PROXY = "https://cors-anywhere.herokuapp.com/";
const API_URL = "https://www.goodreads.com/book/auto_complete?format=json&q=";

const searchEngine = document.querySelector(".form");
const result = document.querySelector(".results");

//--- auxiliary functions

function createLoader() {
  const loader = new Image();
  loader.src =
    "https://media.giphy.com/media/26n6WywJyh39n1pBu/giphy-downsized.gif";
  result.innerHTML = `<ul></ul>`;
  result.append(loader);
}

function createListBooks(b) {
  const li = document.createElement("li");
  li.classList.add("entry");

  const img = new Image();
  img.classList.add("entry__image");
  img.src = b.imageUrl;
  img.alt = b.title;

  const p = document.createElement("p");
  p.innerText = b.title;
  p.classList.add("entry__name");

  li.append(img);
  li.append(p);

  result.append(li);
}

//---mian functions

async function getData(url = "") {
  createLoader();
  const response = await fetch(url, {
    method: "GET", 
    body: JSON.stringify()
  });

  if (response.ok) {
    return response.json();
  }
  throw "problem z połączeniem";
}

const setRequest = url => {
  getData(url)
    .then(data => {
      result.innerHTML = `<ul></ul>`;

      !data.length
        ? (result.innerText = `nie znaleziono`)
        : data.forEach(book => createListBooks(book));
    })
    .catch(err => {
      console.error(err);
    });
};

//---event

searchEngine.addEventListener("submit", e => {
  e.preventDefault();
  const { 0: input } = e.target;
  setRequest(`${PROXY}${API_URL}${input.value}`);
});
