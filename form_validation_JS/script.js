import { nepal_location } from "./nepal_location.js";
import { DisplayError } from "./Validation/DisplayError.js";
import { NameValidation } from "./Validation/NameValidation.js";
import { Address } from "./Components/Address.js";
import { FileValidation } from "./Validation/FileValidation.js";
document.addEventListener("DOMContentLoaded", () => {
  const province = document.querySelector("#province");
  const district = document.querySelector("#district");
  const municipality = document.querySelector("#municipality");

  const getAddress = new Address(province, district, municipality);
  // display list of province
  getAddress.displayProvinceList();

  // display list of districts when province list is changed
  province.addEventListener("change", () => getAddress.updateDistrict());
  // display list of municipalities when district list is changed
  district.addEventListener("change", () => getAddress.updateMunicipality());
});

// Event to be triggered when the form is submitted
document.getElementById("myForm").addEventListener("submit", function (event) {
  // prevent reload of the page
  event.preventDefault();

  let firstName = document.getElementById("firstname").value;
  let lastName = document.getElementById("lastname").value;
  let dob = document.getElementById("DOB").value;
  let email = document.getElementById("email").value;
  let gender = document.querySelector('input[name="gender"]:checked').value;
  let selectedProvince = document.querySelector("#province").value;
  let selectedDistrict = document.querySelector("#district").value;
  let selectedMunicipality = document.querySelector("#municipality").value;
  let fileInput = document.getElementById("uploadPicture");
  const checkboxes = document.querySelectorAll('input[name="course"]:checked');

  // boolean vars to check for invalid inputs
  let isValidFirstName = new NameValidation(firstName).validateName();
  let isValidLastName = new NameValidation(lastName).validateName();
  let isValidUsername = isValidFirstName && isValidLastName;

  let selectedCourses = [];
  checkboxes.forEach((checkbox) => {
    selectedCourses.push(checkbox.value);
  });

  // create instance of the FileValidation class
  let fileValidator = new FileValidation(fileInput);

  // check if the uploaded file is image or not
  let isValidFile = fileValidator.validateFileExtension();

  // check if the uploaded image is of size < 4 MB
  let isValidFileSize = fileValidator.validateFileSize();

  // true only when all booleans are true
  let formValid = isValidUsername && isValidFile && isValidFileSize;

  if (!formValid) {
    if (!isValidUsername) {
      new DisplayError(
        "firstNameError",
        "Name contains special characters!"
      ).displayError();
    }

    if (!isValidFile) {
      new DisplayError(
        "imageExtensionError",
        "Uploaded file is not an image!"
      ).displayError();
    }

    if (!isValidFileSize) {
      new DisplayError(
        "imageExtensionError",
        "Image size must be less than 4 MB!"
      ).displayError();
    }

    return;
  }

  // Append Data to Table
  const tableBody = document.getElementById("displayInformation");
  tableBody.innerText = "";
  const row = document.createElement("tr");

  row.innerHTML = `
      <td>${fullName}</td>
      <td>${email}</td>
      <td>${dob}</td>
      <td>${gender}</td>
      <td>${selectedCourses.join(", ")}</td>
      <td>${selectedProvince}</td>
      <td>${selectedDistrict}</td>
      <td>${selectedMunicipality}</td>
    `;
  tableBody.appendChild(row);

  // Display Uploaded Image
  let file = fileInput.files[0];
  if (file) {
    let reader = new FileReader();
    reader.onload = function (event) {
      document.getElementById("previewImage").src = event.target.result;
      document.getElementById("previewImage").style.display = "block";
    };
    reader.readAsDataURL(file);
  }

  document.getElementById("myForm").reset();
  document.querySelector(".error-display").style.display = "none";
  // window.location.reload();
});
