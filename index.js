import "./style.css";
const PROXY = "https://cors-anywhere.herokuapp.com/";
const API_URL = "https://www.goodreads.com/book/auto_complete?format=json&q=";

const formToSearch = document.querySelector(".form");
const inputTitle = document.getElementById("#book-name");
const result = document.querySelector(".results");
const q = "harry%20potter";
const search_url = `${PROXY}${API_URL}${q}`;

async function appendData(url = "") {
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

const getData = url =>
  appendData(url)
    .then(data => {
   


      result.innerHTML = `<ul></ul>`;
      data.forEach(e => {
        const li = document.createElement("li");
        const img = new Image();
        const p = document.createElement("p");

        li.classList.add("entry");
        img.classList.add("entry__image");
        img.src = e.imageUrl;
        p.innerText = e.title;
        p.classList.add("entry__name");

        li.append(img);
        li.append(p);

        result.append(li);
        console.log(e.imageUrl);
        console.log(e.title);
        console.log(e.author.name);
      });


    })
    .catch(err => {
      console.log("coś poszło nie tak");
    });

formToSearch.addEventListener("submit", e => {
  e.preventDefault();
  const { 0: input } = e.target;

  getData(`${PROXY}${API_URL}${input.value}`);
});
