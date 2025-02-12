import { nepal_location } from "../nepal_location.js";
export class Address {
  constructor(province, district, municipality) {
    this.province = province;
    this.district = district;
    this.municipality = municipality;
  }

  displayProvinceList() {
    nepal_location.provinceList.forEach((prov) => {
      const option = document.createElement("option");
      option.value = prov.name;
      option.textContent = prov.name;
      this.province.appendChild(option);
    });
  }

  updateDistrict() {
    // Clear previous options
    this.district.innerHTML = '<option value="">Select District</option>';
    // Clear municipalities
    this.municipality.innerHTML =
      '<option value="">Select Municipality</option>';

    // check the availability of the province in the nepal_location.js based on the selected province
    let selectedProvince = this.province.value;
    let prov = nepal_location.provinceList.find(
      (p) => p.name === selectedProvince
    );

    // display list of districts of that respective only if the prov==true
    if (prov) {
      prov.districtList.forEach((dist) => {
        const option = document.createElement("option");
        option.value = dist.name;
        option.textContent = dist.name;
        this.district.appendChild(option);
      });
    }
  }

  updateMunicipality() {
    municipality.innerHTML = '<option value="">Select Municipality</option>'; // Clear previous options

    // check te availability of the district
    let selectedDistrict = this.district.value;
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
}
