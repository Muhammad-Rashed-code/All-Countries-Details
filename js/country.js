
// search section

const searchCountry = () => {
    const searchField = document.getElementById('search-input');
    const searchValue = searchField.value;
    // console.log(searchValue);
    searchField.value = '';

    fetch(`https://restcountries.com/v3.1/name/${searchValue}`)
        .then(response => response.json())
        .then(json => displaySearch(json[0]))
}


const displaySearch = (country) => {
    console.log(country);
    const ShowDetailsDiv = document.getElementById('show-contries');
    ShowDetailsDiv.classList.add('show-detailsclass')
    ShowDetailsDiv.innerHTML = `
        <img src="${country.flags.png}" alt="">
        <h5>Name: ${country.name.common}</h5>
        <p>Capital: ${country.capital}</p>
        <p>Population: ${country.population} +People</p>
        <p>Region: ${country.region}</p>
        <p>Languages: ${country?.languages.eng} ${country?.languages.ben}</p>
        <p>Timezones: ${country.timezones.slice(0, 15)}</p>
        <img class="arms" src="${country.coatOfArms.png}" alt="">
    `
}





// .................................

const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(json => displayCountries(json))
}
loadCountries()
const displayCountries = (countries) => {
    const CountryDiv = document.getElementById('countries')
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
        <img src="${country.flags.png}" alt="">
        <h5>Name: ${country.name.common}</h5>
        <p>Population: ${country.population}</p>
        <button onclick="ShowDetails('${country.name.common}')">Show Details</button>
        `
        CountryDiv.appendChild(div)
    })

}


const ShowDetails = (name) => {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
        .then(response => response.json())
        .then(json => displayShowDetails(json[0]))

}

const displayShowDetails = (country) => {
    const ShowDetailsDiv = document.getElementById('show-contries');
    ShowDetailsDiv.classList.add('show-detailsclass')
    ShowDetailsDiv.innerHTML = `
    <img src="${country.flags.png}" alt="">
    <h5>Name: ${country.name.common}</h5>
    <p>Capital: ${country.capital}</p>
    <p>Population: ${country.population} +People</p>
    <p>Region: ${country.region}</p>
    <p>Languages: ${country?.languages.eng} ${country?.languages.ben}</p>
    <p>Timezones: ${country.timezones.slice(0, 15)}</p>
    <img class="arms" src="${country.coatOfArms.png}" alt="">
    `
}

/* const SearchBUTton = document.getElementById('btnn').addEventListener('click', function () {
    const searchID = document.getElementById('search-input');
    const searchTExt = searchID.value;
    const searchValue = parseFloat(searchTExt);
})
 */
































/* const searchBtn = () => {
    const searchButton = document.getElementById('btnn');
    const buttonText = searchButton.value;

const searchCountries = () => {
    const searchDiv = document.getElementById('search-input');
    const searchDivText = searchDiv.value;
    const searchTEXT = parseFloat(searchDivText);
}


} */