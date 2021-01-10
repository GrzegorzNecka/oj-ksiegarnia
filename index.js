import "./style.css";
const PROXY = "https://cors-anywhere.herokuapp.com/";
const API_URL = "https://www.goodreads.com/book/auto_complete?format=json&q=";

const formToSearch = document.querySelector(".form");
const result = document.querySelector(".results");

function addLoader() {
  const loader = new Image();
  loader.src =
    "https://media.giphy.com/media/26n6WywJyh39n1pBu/giphy-downsized.gif";
  result.innerHTML = `<ul></ul>`;
  result.append(loader);
}

async function appendData(url = "") {
  addLoader();
  const response = await fetch(url, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "default", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "omit", // include, *same-origin, omit
    headers: { "Content-Type": "application/json" },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify()
  });

  console.log(response);
  return response.json();
}

function setListBooks(b) {
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

const getData = url => {
  appendData(url)
    .then(data => {
      result.innerHTML = `<ul></ul>`;
      console.log(data);
      data.forEach(book => setListBooks(book));
    })
    .catch(err => {
      console.error(err);
    });
};

formToSearch.addEventListener("submit", e => {
  e.preventDefault();
  const { 0: input } = e.target;
  getData(`${PROXY}${API_URL}${input.value}`);
});
