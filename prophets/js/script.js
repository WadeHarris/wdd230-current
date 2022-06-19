const requestURL = 'https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json';
const cards = document.querySelector('cards');
//Fetch all
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const prophets = jsonObject['prophets'];
        prophets.forEach(displayProphets);
    });

function displayProphets(prophet) {
    //Create all
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let birthDate = document.createElement('p');
    let birthPlace = document.createElement('p');
    let portrait = document.createElement('img');

    //---
    h2.textContent = `${prophet.name} ${prophet.lastname}`; 
    birthDate.textContent = `Date of Birth - ${prophet.birthdate}`
    birthPlace.textContent= `Place of Birth - ${prophet.birthplace}`
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order}th Latter-day President`);
    portrait.setAttribute('loading', 'lazy');
    //---
    card.appendChild(h2);
    card.appendChild(birthDate);
    card.appendChild(birthPlace);
    card.appendChild(portrait);
    document.querySelector('div.cards').appendChild(card);
};


