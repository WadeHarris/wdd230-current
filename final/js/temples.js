const cards = document.querySelector(".cards");
const requestURL = "js/temples.json";

async function getTemples() {
    let response = await fetch(requestURL);
    if (response.ok) {
        let data = await response.json();
        displayTemples(data);
    } else {
        throw Error(response.statusText);
    }
}

getTemples();

function displayTemples(data) {
    data.temples.forEach(temple => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let tempImage = document.createElement('img');
        let tempAddress = document.createElement('p');
        let tempPhone = document.createElement('p');
        let tempEmail = document.createElement('p');
        let tempServTitle = document.createElement('h3');
        let tempService = document.createElement('ul');
        let hotelServTitle = document.createElement('h3');
        let hotelService = document.createElement('ul');
        let historyTitle = document.createElement('h3');
        let tempHistory = document.createElement('ul');
        let ordinanceTitle = document.createElement('h3');
        let tempOrdinances = document.createElement('p');
        let sessionTitle = document.createElement('h3');
        let tempSessions = document.createElement('p');
        let closedTitle = document.createElement('h3');
        let tempClosed = document.createElement('ul');

        h2.textContent = `${temple.name}`;
        tempAddress.textContent = `${temple.address}`;
        tempPhone.textContent = `${temple.phone}`;
        tempEmail.textContent = `${temple.email}`;
        tempServTitle.textContent = `Services Provided by Temple`;
    
        for (var i = 0; i < temple.tempServices.length; i++) {
            let listItem = document.createElement('li');
            listItem.textContent = `${temple.tempServices[i]}`;
            tempService.appendChild(listItem);
        }

        hotelServTitle.textContent = `Services Provided by Hotel`;

        for (var i = 0; i < temple.hotelServices.length; i++) {
            let listItem = document.createElement('li');
            listItem.textContent = `${temple.hotelServices[i]}`;
            hotelService.appendChild(listItem);
        }

        historyTitle.textContent = `History`;

        for (var i = 0; i < temple.history.length; i++) {
            let listItem = document.createElement('li');
            listItem.textContent = `${temple.history[i]}`;
            tempHistory.appendChild(listItem);
        }

        ordinanceTitle.textContent = `Ordinance Information`;
        tempOrdinances.textContent = `${temple.ordinances}`;
        sessionTitle.textContent = `Session Information`;
        tempSessions.textContent = `${temple.sessions}`;
        closedTitle.textContent = `Closed Schedule`;

        for (var i = 0; i < temple.closure.length; i++) {
            let listItem = document.createElement('li');
            listItem.textContent = `${temple.closure[i]}`;
            tempClosed.appendChild(listItem);
        }

        tempImage.setAttribute('src', temple.img);
        tempImage.setAttribute('alt', `Image of ${temple.name}`);
        tempImage.setAttribute('loading', 'lazy');

        card.appendChild(tempImage);
        card.appendChild(h2);
        card.appendChild(tempAddress);
        card.appendChild(tempPhone);
        card.appendChild(tempEmail);
        card.appendChild(tempServTitle);
        card.appendChild(tempService);
        card.appendChild(hotelServTitle);
        card.appendChild(hotelService);
        card.appendChild(historyTitle);
        card.appendChild(tempHistory);
        card.appendChild(ordinanceTitle);
        card.appendChild(tempOrdinances);
        card.appendChild(sessionTitle);
        card.appendChild(tempSessions);
        card.appendChild(closedTitle);
        card.appendChild(tempClosed);
        
        document.querySelector('div.cards').appendChild(card);

    });
    
}