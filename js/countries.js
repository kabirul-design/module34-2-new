const countryCode = () =>{
    fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data => displayCountry(data))
}
countryCode();

const displayCountry = countries =>{
    const displayContainer = document.getElementById('countries');
    // for(const country of countries){
        // console.log(country);
        // const showCountry = document.createElement('div');
        // showCountry.innerText =`Name : ${country.name} code: ${country.code}`;
        // displayContainer.appendChild(showCountry);  
        
    // }
     // forEach is same function for data calls 
    countries.forEach(country => {
        // console.log(country);
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
        <h3>${country.name}</h3>
        <p>${country.capital}</p>
        <button onclick="loadCountryShow('${country.name}')">Details</button>`;
         displayContainer.appendChild(div);

    });
}

const loadCountryShow = name =>{
    const url = `https://restcountries.com/v2/name/${name} `;
    fetch(url)
    .then(res =>res.json())
    .then(data => displayCountryDetails(data[0]))
}
// loadCountryShow();

const displayCountryDetails = country => {
   const displayDiv = document.getElementById('country-details');
   const displayName = document.createElement('div')
   displayName.innerHTML = `
   <h4>${country.name}</h4>
   <p>${country.capital}</p>
   <p>population: ${country.population}</p>
   <img width="150" src="${country.flag}">
   `
   displayDiv.appendChild(displayName);

}

 

