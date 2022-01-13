var xhr = new XMLHttpRequest();
xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json", true);
xhr.send();
xhr.onload = function () {
    var data = JSON.parse(xhr.response);


    // Get all the countries from Asia continent /region using Filter function
    var asianCountries = data.filter((country) => country.region === "Asia").map((detail) => detail.name);
    console.log(asianCountries);


    // Get all the countries with a population of less than 2 lakhs using Filter function
    var popRestriction = data.filter((country) => country.population < 200000).map((val) => val.name);
    console.log(popRestriction);


    // Print the following details name, capital, flag using forEach function
    data.forEach((element) => console.log(`${element.name}, ${element.capital}, ${element.flag}`));


    // Print the total population of countries using reduce function
    var res = data.reduce((acc, country) => acc + country.population, 0);
    console.log(res);


    // Print the country which uses US Dollars as currency.
    var cur = [];
    for (i = 0; i < data.length; i++) {
        if (data[i].currencies[0].code === "USD") {
            console.log(data[i].name)
        }
    }
};