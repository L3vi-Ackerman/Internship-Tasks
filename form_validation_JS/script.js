import { nepal_location } from "./nepal_location.js";
document.addEventListener("DOMContentLoaded", () => {
  const province = document.querySelector("#province");
  const district = document.querySelector("#district");
  const municipality = document.querySelector("#municipality");

  //display names of Province from nepal_location.js
  nepal_location.provinceList.forEach((prov) => {
    const option = document.createElement("option");
    option.value = prov.name;
    option.textContent = prov.name;
    province.appendChild(option);
  });

  // Update District Dropdown based on selected Province
  function updateDistrict() {
    // Clear previous options
    district.innerHTML = '<option value="">Select District</option>';
    // Clear municipalities
    municipality.innerHTML = '<option value="">Select Municipality</option>';

    // check the availability of the province in the nepal_location.js based on the selected province
    let selectedProvince = province.value;
    let prov = nepal_location.provinceList.find(
      (p) => p.name === selectedProvince
    );

    // display list of districts of that respective only if the prov==true
    if (prov) {
      prov.districtList.forEach((dist) => {
        const option = document.createElement("option");
        option.value = dist.name;
        option.textContent = dist.name;
        district.appendChild(option);
      });
    }
  }

  // Update Municipality Dropdown based on selected District
  function updateMunicipality() {
    municipality.innerHTML = '<option value="">Select Municipality</option>'; // Clear previous options

    // check te availability of the district
    let selectedDistrict = district.value;
    for (let i = 0; i < nepal_location.provinceList.length; i++) {
      let dist = nepal_location.provinceList[i].districtList.find(
        (d) => d.name === selectedDistrict
      );

      //if district is found, display list of municipalities
      if (dist) {
        dist.municipalityList.forEach((mun) => {
          const option = document.createElement("option");
          option.value = mun.name;
          option.textContent = mun.name;
          municipality.appendChild(option);
        });
      }
    }
  }

  province.addEventListener("change", updateDistrict);
  district.addEventListener("change", updateMunicipality);
});

// Event to be triggered when the form is submitted
document.getElementById("myForm").addEventListener("submit", function (event) {
  //prevent refreshing of the page
  event.preventDefault();

  //get the values from the input field
  let firstName = document.getElementById("firstname").value;
  let lastName = document.getElementById("lastname").value;
  let dob = document.getElementById("DOB").value;
  let email = document.getElementById("email").value;
  let gender = document.querySelector('input[name="gender"]:checked').value;
  let selectedProvince = province.value;
  let selectedDistrict = district.value;
  let selectedMunicipality = municipality.value;
  var fileInput = document.getElementById("uploadPicture");
  const checkboxes = document.querySelectorAll('input[name="course"]:checked');
  const fullName = firstName + " " + lastName;

  //boolean variables to check validation
  let isValidUsername = true;
  var isValidFile = false;
  var allowedExtension = ["jpeg", "jpg"];

  //get the uploaded files extensions
  var fileExtension = fileInput.value.split(".").pop().toLowerCase();

  //check if firstname contains special characters
  for (let i = 0; i < firstName.length; ++i) {
    let ch = firstName.charCodeAt(i);
    if (
      !(ch >= 65 && ch <= 90) && // A-Z
      !(ch >= 97 && ch <= 122) && // a-z
      !(ch >= 48 && ch <= 57) // 0-9
    ) {
      isValidUsername = false;
      break;
    }
  }

  // check if lastname contains special characters
  for (let i = 0; i < lastName.length; ++i) {
    let ch = lastName.charCodeAt(i);
    // console.log(ch);
    if (
      !(ch >= 65 && ch <= 90) && // A-Z
      !(ch >= 97 && ch <= 122) && // a-z
      !(ch >= 48 && ch <= 57) // 0-9
    ) {
      isValidUsername = false;
      break;
    }
  }

  const selectedCourses = [];
  //store the selected courses in the array
  checkboxes.forEach((checkbox) => {
    selectedCourses.push(checkbox.value);
  });

  //check is the extension of the uploaded file is equal to the extension stored is the array
  for (var index in allowedExtension) {
    if (fileExtension === allowedExtension[index]) {
      isValidFile = true;
      break;
    }
  }

  //   if username contains special characters
  if (!isValidUsername) {
    alert("Name should not contain special characters");
    return;
  }
  //   if uploaded file is not an image
  if (!isValidFile) {
    alert("Uploading files other than images is not allowed!");
    eturn;
  } else {
    //   compute the size of the uploaded image
    if (fileInput.files.length > 0) {
      for (let i = 0; i <= fileInput.files.length - 1; i++) {
        const fsize = fileInput.files.item(i).size;
        let file = Math.round(fsize / 1024);
        // if size of the file > 4MB display error
        if (file >= 4096) {
          alert("File too Big, please select a file less than 4mb");
          return;
        }
      }
    }
    // Append data to table
    const tableBody = document.getElementById("displayInformation");
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

    // display the uploaded image
    let file = fileInput.files[0];
    if (file) {
      let reader = new FileReader();
      reader.onload = function (event) {
        let base64String = event.target.result;
        document.getElementById("previewImage").src = base64String;
        document.getElementById("previewImage").style.display = "block";
      };
      reader.readAsDataURL(file);
    }

    reader.readAsDataURL(file);
    // reset form
    document.getElementById("myForm").reset();
  }
});
