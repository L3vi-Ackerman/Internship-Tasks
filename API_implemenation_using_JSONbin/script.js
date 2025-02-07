const url = "https://api.jsonbin.io/v3/b";
const apiKey = "$2a$10$kjLptXMRW4xNGVfJbxocRe/pHGy.efAJIr2SthlDdDhzz0mK2Wjoq";

// Function to add a row to the table
const addRow = (data) => {
  const tableBody = document.getElementById("dataTable");
  const row = tableBody.insertRow();

  const firstNameCell = row.insertCell(0);
  const lastNameCell = row.insertCell(1);
  const messageCell = row.insertCell(2);

  firstNameCell.textContent = data.firstname;
  lastNameCell.textContent = data.lastname;
  messageCell.textContent = data.message;
};

const submitForm = (e) => {
  e.preventDefault();
  const firstNameField = document.getElementById("firstname").value;
  const lastNameField = document.getElementById("lastname").value;
  const messageField = document.getElementById("message").value;

  if (!firstNameField || !lastNameField || !messageField) {
    alert("Please fill in all fields before submitting.");
    return;
  }

  const data = {
    firstname: firstNameField,
    lastname: lastNameField,
    message: messageField,
  };

  console.log(data);

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Master-Key": apiKey,
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((json) => {
      console.log("JSON Bin Created:", json);
      alert(`Data saved! Bin ID: ${json.metadata.id}`);

      addRow(data);
    })
    .catch((error) => console.error("Error:", error));
};

// Attach event listener to the form
document.getElementById("myForm").addEventListener("submit", submitForm);
