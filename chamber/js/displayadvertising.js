const url1 = "data/data.json";
// const directoryCards = document.querySelector('.directory_cards');


// -------- WORKING WITH SPOTLIGHTS ---------
// get the SPOT1 elements
const spot1H2 = document.createElement('h2');
const spot1Img = document.createElement('img');
const spot1P = document.createElement('p');
const spot1Email = document.createElement('p');
const spot1Number = document.createElement('p');
const placeHolder1 = document.querySelector('.placeholder-box-spot1');

// get the SPOT2 elements
const spot2H2 = document.createElement('h2');
const spot2Img = document.createElement('img');
const spot2P = document.createElement('p');
const spot2Email = document.createElement('p');
const spot2Number = document.createElement('p');
const placeHolder2 = document.querySelector('.placeholder-box-spot2');

// get the SPOT3 elements
const spot3H2 = document.createElement('h2');
const spot3Img = document.createElement('img');
const spot3P = document.createElement('p');
const spot3Email = document.createElement('p');
const spot3Number = document.createElement('p');
const placeHolder3 = document.querySelector('.placeholder-box-spot3');

async function getData() {
    let response = await fetch(url1);
    if (response.ok) {
        let data = await response.json();
        console.log(data)
        displayAdvertising(data);
    } else {
        throw Error(response.statusText)
    }
}

getData()

let randomNumber1 = Math.floor((Math.random() * 7) + 1);
let randomNumber2 = Math.floor((Math.random() * 7) + 1);
let randomNumber3 = Math.floor((Math.random() * 7) + 1);

function displayAdvertising(data) {
    let companie1 = data.companies[randomNumber1];
    let companie2 = data.companies[randomNumber2];
    let companie3 = data.companies[randomNumber3];
    // spotlight 1
    spot1H2.setAttribute('id', 'spot1-h2');
    spot1H2.innerHTML = companie1.name;

    spot1Img.setAttribute('id', 'spot1-img');
    spot1Img.setAttribute('src', companie1.image);
    spot1Img.setAttribute('alt', `${companie1.name} logo`);

    spot1P.setAttribute('id', 'spot1-p');
    spot1P.innerHTML = `<em>${companie1.comment}</em>`;

    spot1Email.setAttribute('id', 'spot1-email');
    spot1Email.innerHTML = companie1.email;

    spot1Number.setAttribute('id', 'spot1-number');
    spot1Number.innerHTML = `${companie1.phoneNumber} | <a href="https//:${companie1.url}" target:"_blank>Website</a>`;

    placeHolder1.appendChild(spot1H2);
    placeHolder1.appendChild(spot1Img);
    placeHolder1.appendChild(spot1P);
    placeHolder1.appendChild(spot1Email);
    placeHolder1.appendChild(spot1Number);

    // spotlight 2
    spot2H2.setAttribute('id', 'spot2-h2');
    spot2H2.innerHTML = companie2.name;

    spot2Img.setAttribute('id', 'spot2-img');
    spot2Img.setAttribute('src', companie2.image);
    spot2Img.setAttribute('alt', `${companie2.name} logo`);

    spot2P.setAttribute('id', 'spot2-p');
    spot2P.innerHTML = `<em>${companie2.comment}</em>`;

    spot2Email.setAttribute('id', 'spot2-email');
    spot2Email.innerHTML = companie2.email;

    spot2Number.setAttribute('id', 'spot2-number');
    spot2Number.innerHTML = `${companie2.phoneNumber} | <a href="https//:${companie2.url}" target:"_blank>Website</a>`;

    placeHolder2.appendChild(spot2H2);
    placeHolder2.appendChild(spot2Img);
    placeHolder2.appendChild(spot2P);
    placeHolder2.appendChild(spot2Email);
    placeHolder2.appendChild(spot2Number);

    // spotlight 3
    spot3H2.setAttribute('id', 'spot3-h2');
    spot3H2.innerHTML = companie3.name;

    spot3Img.setAttribute('id', 'spot3-img');
    spot3Img.setAttribute('src', companie3.image);
    spot3Img.setAttribute('alt', `${companie3.name} logo`);

    spot3P.setAttribute('id', 'spot3-p');
    spot3P.innerHTML = `<em>${companie3.comment}</em>`;

    spot3Email.setAttribute('id', 'spot3-email');
    spot3Email.innerHTML = companie3.email;

    spot3Number.setAttribute('id', 'spot3-number');
    spot3Number.innerHTML = `${companie3.phoneNumber} | <a href="https//:${companie3.url}" target:"_blank>Website</a>`;

    placeHolder3.appendChild(spot3H2);
    placeHolder3.appendChild(spot3Img);
    placeHolder3.appendChild(spot3P);
    placeHolder3.appendChild(spot3Email);
    placeHolder3.appendChild(spot3Number);
}