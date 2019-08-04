


  let fetch = require('node-fetch');
   getCountry = (countryName) => {
     fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
          .then(response => {
              return response.json();
          })
       .then(response => {
              console.log(response);
          })
          .catch(error => console.log("Error", error))
        };
process.stdout.write('Agg el Nombre del pais: ');
process.stdin.on('data', (data) => {
    let mexico = data.toString();
    getCountry(mexico);
});