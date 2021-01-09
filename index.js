import "./style.css";
const PROXY = "https://cors-anywhere.herokuapp.com/";
const API_URL = "https://www.goodreads.com/book/auto_complete?format=json&q=";

const formToSearch = document.querySelector(".form");
const inputTitle = document.getElementById("#book-name");

 let search_url = `${PROXY}${API_URL}harry`;

fetch(search_url, {
  method: "GET",
  headers: {"Content-Type" : "application/json"}
}) 


// fetch(API_URL, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify()
// })
//   .then(response => {

//     console.log(response)
//     if (response.ok) {
//       return response.text();
//     }
//     throw "Nie udało się wysłać zapytania!";
//   })
//   .then(responseText => {
//     console.log( JSON.parse(responseText));
//   })
//   .catch(err => {
//     alert("spróbuj ponownie");
//   });

// Example POST method implementation:
async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json"
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

postData("API_URL", {}).then(data => {
  console.log(data); // JSON data parsed by `data.json()` call
});
