const requestURL = 'https://github.com/WadeHarris/wdd230-current/blob/main/lesson9/data.json';
const directoryBox = document.querySelector('.directory_box');


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing


    const prophets = jsonObject['directoryOfBusiness'];
    prophets.forEach(displayCompanies);
  });

function displayCompanies(company) {
  // Create elements to add to the document
  let directorySection = document.createElement('section');
  let logoCompany = document.createElement('img');
  let nameCompany = document.createElement('h2')
  let addressCompany = document.createElement('p');
  let phoneCompany = document.createElement('p')
  let webCompany = document.createElement('p')
  let levelMember = document.createElement('p')


  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
  logoCompany.setAttribute('src', `images/${company.logoImage}`);
  logoCompany.setAttribute('alt', `Logo of: ${company.logoImage}`);
  logoCompany.setAttribute('loading', 'lazy');

  // Change the textContent property of the h2, p element to contain the name, address, phone, website and membership of the companies.
  nameCompany.textContent = `${company.name}`
  addressCompany.textContent = `${company.address}`
  phoneCompany.textContent = `${company.phone}`
  webCompany.textContent = `${company.website}`
  levelMember.textContent = `${company.membership}`




  // Add/append the section(company) with img, h2 and four p element.
  directorySection.appendChild(logoCompany);
  directorySection.appendChild(nameCompany);
  directorySection.appendChild(addressCompany);
  directorySection.appendChild(phoneCompany);
  directorySection.appendChild(webCompany);
  directorySection.appendChild(levelMember);



  // Add/append the existing HTML div with the directory_box class with the section(company)
  document.querySelector('.directory_box').appendChild(directorySection);
}


/**This is the code for the buttons grid and list**/

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".directory_box");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
  // example using arrow function
  display.classList.add("grid");
  display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
  display.classList.add("list");
  display.classList.remove("grid");
}
