// const book = {
//   title: "The Great Gatsby",
//   author: "F. Scott Fitzgerald",
//     year: 1925
// };
// const bookJSON = JSON.stringify(book);
// console.log(bookJSON);

// // JSON.stringify() = js{} => json{}

// const userJSON = '{"name":"Mango","age":3,"isHappy":true}';
// const user = JSON.parse(userJSON);
// console.log(user);
// // JSON.parse() = json{} => js{}

import user from "./data/user.json";
console.log(user);
const container = document.getElementById("user-container");

function renderUser(user) {
  return `<h2>${user.name}</h2>
   <p>Weight: ${user.weight}</p>
    <p>Height: ${user.height}</p>
    <p>Age: ${user.age}</p>
    <p>Is Happy: ${user.isHappy}</p>
    <p> cars: ${user.cars.join(", ")}</p>`
    ;
    
}
container.innerHTML = renderUser(user);
