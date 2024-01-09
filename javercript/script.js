const getCountryDetails = async (event) => {

    event.preventDefault();

    const inputElement = document.getElementById("searchInput");
    const searchedValue = inputElement.value;
    const countryNameElement = document.getElementById("countryName");
    const countryCapitalElement = document.getElementById("countryCapital");
    const countryFlagElement = document.getElementById("countryFlag");
    const countryRegionElement = document.getElementById("countryRegion");
    const countryPopulationElement = document.getElementById("countryPopulation");
    const countryContinentElement = document.getElementById("countryContinent");
    const countryTimeZoneElement = document.getElementById("countryTimeZone");
    const countryMapElement = document.getElementById("countryMap");
    const countryCourracyNameElement = document.getElementById("countryCurrencyName");
    const countryCurrencySymbolElement = document.getElementById("countryCurrencySymbol");
    const countryLanguageElement = document.getElementById("countryLanguage");
    const countryBorderElement = document.getElementById("countryBorder");
    const CountryCoatOfArmElement = document.getElementById("CountryCoatOfArm");
    const countrySubregionElement = document.getElementById("countrySubregion");
    const countryaltspellingElement = document.getElementById("countryaltspelling");
    const countryIndependentElement = document.getElementById("countryIndependent");
    const countryStatusElement = document.getElementById("countryStatus");
    const countryUnMemberElement = document.getElementById("countryUnMember");

    const url = "https://restcountries.com/v3.1/name/nigeria?fulltext=true";
    const url2 = `https://restcountries.com/v3.1/name/${searchedValue}?fulltext=true`

    const errorMsg = "We counld't get the country " + searchedValue + " at the moment. Please try again.";

    try {
        const result = await fetch(url2)
        const countryData = await result.json();

        //check if country data is not fatched
        // if (countryData.status) {
        //     return alert(errorMsg);
        // }

        console.log(searchedValue);
        const actualCountryData = countryData[0];
        const currencyKeys = Object.keys(actualCountryData.currencies)[0];
        const languagekeys = Object.keys(actualCountryData.languages)[0];
        console.log(actualCountryData.currencies[currencyKeys].name)
        console.log(actualCountryData.languages[languagekeys])
        const countryInfo = {
            name: actualCountryData.name.common,
            capital: actualCountryData.capital[0],
            flag: actualCountryData.flags.png,
            population: actualCountryData.population,
            region: actualCountryData.region,
            continent: actualCountryData.continents[0],
            timezone: actualCountryData.timezones[0],
            map_url: actualCountryData.maps.googleMaps,
            currency_name: actualCountryData.currencies[currencyKeys].name,
            currency_symbol: actualCountryData.currencies[currencyKeys].symbol,
            language: actualCountryData.languages[languagekeys],
            border: actualCountryData.borders[0],
            coatOfArm: actualCountryData.coatOfArms.png,
            subregion: actualCountryData.subregion,
            altSpelling: actualCountryData.altSpellings[0],
            independent: actualCountryData.independent,
            status: actualCountryData.status,
            unMember: actualCountryData.unMember,
        }

        console.log(countryInfo);
        countryNameElement.innerText = countryInfo.name;
        countryCapitalElement.innerText = countryInfo.capital;
        countryFlagElement.innerHTML = `<img src="${countryInfo.flag}" width="250px" alt="Country flag" />`
        countryRegionElement.innerText = countryInfo.region;
        countryPopulationElement.innerText = countryInfo.population;
        countryContinentElement.innerText = countryInfo.continent;
        countryTimeZoneElement.innerText = countryInfo.timezone;
        countryMapElement.innerHTML = `<a href="${countryInfo.map_url}" target="_blank">${countryInfo.map_url}</a>`;
        countryCourracyNameElement.innerText = countryInfo.currency_name;
        countryCurrencySymbolElement.innerText = countryInfo.currency_symbol;
        countryLanguageElement.innerText = countryInfo.language;
        countryBorderElement.innerText = countryInfo.border;
        CountryCoatOfArmElement.innerHTML = `<img src="${countryInfo.coatOfArm}"width="200px" alt="Country coatOfArm" /> `;
        countrySubregionElement.innerText = countryInfo.subregion;
        countryaltspellingElement.innerText = countryInfo.altSpelling;
        countryIndependentElement.innerText = countryInfo.independent;
        countryStatusElement.innerText = countryInfo.status;
        countryUnMemberElement.innerText = countryInfo.unMember;
    } catch (error) {
        alert(errorMsg)
        console.log(errorMsg)
    }

} 