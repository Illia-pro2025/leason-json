const form = document.getElementById("form");
const movieTable = document.getElementById("movie-table");
const movies = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const movie = {
    name: document.getElementById("movie").value,
    year: document.getElementById("year").value,
    rating: document.getElementById("rating").value,
    genre: document.getElementById("genre").value,
    director: document.getElementById("director").value,
    watched: document.getElementById("watched").checked,
  };
  const movieJson = JSON.stringify(movie);
  const newmovie = JSON.parse(movieJson);
  movies.push(newmovie);
  renderMovies();
  form.reset();
});
console.log(movies);
function renderMovies() {
  movieTable.innerHTML = "";
  movies.forEach((item, index) => {
    movieTable.innerHTML += `<tr>
    <td>${item.name}</td>
    <td>${item.year}</td>
    <td>${item.rating}</td>
    <td>${item.genre}</td>
    <td>${item.director}</td>
    <td>${item.watched ? "Yes" : "No"}</td>
    <td>
    <button data-index="${index}" class="delete">Delete</button>
    <button data-index="${index}" class="edit">Edit</button>
    </td>
    </tr>`;
  });
  document
    .querySelectorAll(".delete")
    .forEach((button) => button.addEventListener("click", deleteMovie));
}
function deleteMovie(e) {
  const index = parseInt(e.target.dataset.index);
  movies.splice(index, 1);
  renderMovies();
}
