const productTuple = [];

// function to be executed on pressing the button 'ADD PRODUCTS'
function addProduct() {
  // get the value of the element with the id product
  product = document.getElementById("product").value;

  // get the value of the element with the id quantity
  quantity = document.getElementById("quantity").value;

  // check that the value of product and quantity is present
  if (product && quantity) {
    // push in the productTuple array
    productTuple.push({ product: product, quantity: quantity });

    //set the value of input fields to ""
    document.getElementById("product").value = "";
    document.getElementById("quantity").value = "";

    // call the updateTable function to update table
    updateTable();
  } else {
    //display alert if any of the product or quantity field is empty
    alert("Please enter both fields!");
  }
}

// function that adds product and quantity in the table as a row
function updateTable() {
  // get the element with id 'productData
  const tableBody = document.getElementById("productData");

  // set the tableBody contents to "" otherwise the following forEach function would display repetitive products
  tableBody.innerHTML = "";

  //iterate for each items present in the 'productTuple' array
  productTuple.forEach((item) => {
    //create element <tr>
    const row = document.createElement("tr");

    //create element <td> to place product value
    const productCell = document.createElement("td");

    //create element <tr> to place quantity value
    const quantityCell = document.createElement("td");

    //set the textcontent's in productCell and quantityCell
    productCell.textContent = item.product;
    quantityCell.textContent = item.quantity;

    //add the cells in a row
    row.appendChild(productCell);
    row.appendChild(quantityCell);

    // add the row in the table
    tableBody.appendChild(row);
  });
}
