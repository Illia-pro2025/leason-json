let products = JSON.parse(localStorage.getItem("products")) || [];

const productList = document.getElementById("product-list");
const form = document.getElementById("form");
const input = document.getElementById("product");
renderProducts();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const product = input.value.trim();

  if (!product) {
    alert("Please enter a product name");
    return;
  }

  products.push({ id: Date.now(), product });
  localStorage.setItem("products", JSON.stringify(products));

  renderProducts();
  form.reset();
});

function renderProducts() {
  productList.innerHTML = "";
  let id;
  products.forEach((product) => {
    id = product.id;
    productList.innerHTML += `<li><p id="product-name">${product.product}</p> <button class="delete">Delete</button> <button class="edit">Edit</button></li>`;
  });
  const btnDeletes = document.querySelectorAll(".delete");
  const btnEdits = document.querySelectorAll(".edit");
  btnDeletes.forEach((btn) => {
    btn.addEventListener("click", () => {
      deletefn(id);
    });
  });

  btnEdits.forEach((btn) => {
    btn.addEventListener("click", () => {
      editfn(id);
    });
  });
}
function deletefn(id) {
  products = products.filter((product) => product.id !== id);
  localStorage.setItem("products", JSON.stringify(products));
  renderProducts();
}
function editfn(id) {
  const product = products.find((product) => product.id === id);
  input.value = product.product;
  product.product = input.value.trim();
  localStorage.setItem("products", JSON.stringify(products));
  renderProducts();
}
// productList.addEventListener("click", (event) => {
//   if (event.target.classList===delete) {
//     products = products.filter(
//       (product) => product !== event.target.parentElement.textContent,
//     );
//  if(event.target.classList===) {

//     }
//     localStorage.setItem("products", JSON.stringify(products));
//     renderProducts();
//   }
// });
