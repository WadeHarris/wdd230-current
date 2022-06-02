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

let day = d.getDay();

let banner = document.querySelector('.banner')
if(day == 1 || day == 2){
    banner.classList.add("show-banner")
}