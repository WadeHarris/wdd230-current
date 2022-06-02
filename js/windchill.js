const temp = parseFloat(document.querySelector('.temp').textContent);
const wind = document.querySelector('.wind').textContent;

function fahrToCel (celcius) {
    const fahr = (celcius * 1.8) + 32
    return fahr
};

function windChill (airTemp, windSpeed) {

    if (typeof(windSpeed) == String){
        s = 0;
        computeWindChill = 'N/A'
    } else {
        s = parseFloat(windSpeed)
        computeWindChill = 35.74 + (0.6215 * airTemp) - (35.75 * s**0.16) + (0.4275 * airTemp * s**0.16);
    }
    
    return computeWindChill
}


let computedTemp = fahrToCel(temp);
let windChillFactor = windChill(computedTemp, wind)
windChillFactor = windChillFactor.toFixed(2)


if (computedTemp <= 50 && windChillFactor > 3.0){
    document.querySelector('.temp').textContent = `${computedTemp}`;
    document.querySelector('.degOrFahr').textContent = 'F'
    document.querySelector('.fahr').textContent = 'F'
    document.querySelector('.windFactor').textContent = `${windChillFactor}`;
}
 else {
    document.querySelector('.temp').textContent = temp;
    document.querySelector('.degOrFahr').textContent = 'C'
    document.querySelector('.windFactor').textContent = `N/A`;
 }

// } else {
//     document.querySelector('.temp').textContent = 'N/A';
//     document.querySelector('.wind').textContent = 'N/A';
// }

