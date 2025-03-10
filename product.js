const productContainer = document.getElementById("products-container");
const showMoreBtn = document.getElementById("show-more-btn");

let products = [];

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    products = data.products;
    displayProducts(products.slice(0, 8)); 
  });

function displayProducts(productArray) {
  productArray.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.thumbnail}" class="product-image" />
      <div class="product-title">${product.title}</div>
      <div class="rating">⭐ ${product.rating} (${product.stock} шт)</div>
      <div class="product-price">${Math.round(product.price * 0.35)} сум/мес</div>
      <div class="product-old-price">${product.price} сум</div>
      <div class="product-price">${Math.round(product.price * 0.75)} сум</div>
    `;
    productContainer.appendChild(card);
  });
}

showMoreBtn.addEventListener("click", () => {
  const remaining = products.slice(6);
  displayProducts(remaining);
  showMoreBtn.style.display = "none";
});
