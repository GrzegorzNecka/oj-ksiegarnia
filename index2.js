import "./style.css";
const PROXY = "https://cors-anywhere.herokuapp.com/";
const API_URL = "https://www.goodreads.com/book/auto_complete?format=json&q=";

const formToSearch = document.querySelector(".form");
const inputTitle = document.getElementById("#book-name");
const q = "harry%20potter";
const search_url = `${PROXY}${API_URL}${q}`;

const old_url =
  "https://cors-anywhere.herokuapp.com/https://www.goodreads.com/book/auto_complete?format=json&q=harry%20potter";

fetch(old_url, {
  method: "GET", // *GET, POST, PUT, DELETE, etc.
  mode: "cors", // no-cors, *cors, same-origin
  cache: "default", // *default, no-cache, reload, force-cache, only-if-cached
  credentials: "same-origin", // include, *same-origin, omit
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify()
})
  .then(response => {
    if (response.ok) {
      console.log(response);
      return response.json();
    }
    throw "problem z połączeniem";
  })
  .then(responseJson => {
    console.log(responseJson);
  })
  .catch(err => {
    alert("coś poszło nie tak");
  });
