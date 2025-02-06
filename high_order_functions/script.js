const productTuple = [];

function addProduct() {
  product = document.getElementById("product").value;
  quantity = document.getElementById("quantity").value;

  if (product && quantity) {
    productTuple.push({ product: product, quantity: quantity });
    document.getElementById("product").value = "";
    document.getElementById("quantity").value = "";
    updateTable();
  } else {
    alert("Please enter both fields!");
  }
  console.log("btn add product pressed!");
}
function updateTable() {
  const tableBody = document.getElementById("productData");
  tableBody.innerHTML = "";

  productTuple.forEach((item) => {
    const row = document.createElement("tr");
    const productCell = document.createElement("td");
    const quantityCell = document.createElement("td");

    productCell.textContent = item.product;
    quantityCell.textContent = item.quantity;

    row.appendChild(productCell);
    row.appendChild(quantityCell);
    tableBody.appendChild(row);
  });
}
