function toggleMenu(){
    document.getElementById('primaryNav').classList
    .toggle('open');
    document.getElementById('menu-btn').classList
    .toggle('open');
}
const d = new Date();
const last_updated = document.querySelector(".last_updated");
const current_year = document.querySelector(".current_year");
last_updated.textContent = document.lastModified;
current_year.textContent = d.getFullYear();
// select the elements to manipulate (output to)
const datefield = document.querySelector(".date");
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	d);

datefield.innerText = `${fulldate}`;

let imagesToLoad = document.querySelectorAll('img[data-src]');
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};



if('IntersectionObserver' in window) {
const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
    if(item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
    }
    });
});
imagesToLoad.forEach((img) => {
    observer.observe(img);
});
} else {
imagesToLoad.forEach((img) => {
    loadImages(img);
});
}

/*Count Visit */
// initialize display elements
const visits = document.querySelector(".visits-message");

// get the stored value in localStorage
let lastDate = window.localStorage.getItem("date");

let actualDate = new Date().getTime();

if (lastDate) {
	visits.textContent = `Number of days: ${numberOfDays(actualDate, lastDate)} `;
} else {
	visits.textContent = `Welcome!`;
}

localStorage.setItem("date",actualDate);

function numberOfDays(date1, date2){
    return Math.ceil( (date1 - date2)/(1000*3600*24));
}