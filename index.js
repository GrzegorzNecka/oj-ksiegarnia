import "./style.css";

const API_URL =
  "https://cors-anywhere.herokuapp.com/https://www.goodreads.com/book/auto_complete?format=json&q=harry%20potter";

const formToSearch = document.querySelector(".form");
const inputTitle = document.getElementById("#book-name");





// fetch(API_URL, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify()
// })
//   .then(response => {
//     if (response.ok) {
//       return response.text();
//     }
//     throw "Nie udało się wysłać zapytania!";
//   })
//   .then(responseText => {
//     console.log(responseText);
//   })
//   .catch(err => {
//     alert("spróbuj ponownie");
//   });
