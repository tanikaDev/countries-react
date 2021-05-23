import { useState, useEffect } from "react";
// import countriesAll from "./countriesAll";

function CountryPage({ match }) {
  const [country, setCountry] = useState([]);
  // const [borderCountries, setBorderCountries] = useState([]);

  let countryName = match.params.name;

  useEffect(() => {
  	fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
  		.then(res => res.json())
  		.then(data => {
				const [selectedCountry] = data
				setCountry(selectedCountry)
			})
  }, [countryName]);

	let countryLanguages = []
	if (country.length !== 0) {
		country.languages.map(language => countryLanguages.push(language.name))
	}

  return (
    <div className="row">
		<div className="col-12">
			<button type="button" className="btn btn-light-mode">Back</button>
		</div>
			<img className="col-4" src={country.flag} alt="" />
			<div className="col-8">
				<h2>{country.name}</h2>
				<div className="col-12">
					<div className="row">
						<div className="col-6">
							<p>Native Name: {country.nativeName}</p>
							<p>Population: {country.population}</p>
							<p>Region: {country.region}</p>
							<p>Sub Region: {country.subregion}</p>
							<p>Capital: {country.capital}</p>
						</div>
						<div className="col-6">
							<p>Top Level Domain: {country.topLevelDomain}</p>
							<p>Country Currency: {country.currencies ? country.currencies[0].name : null}</p>
							<p>Country Languages: {countryLanguages.map(lang => lang + ", " )}</p>
						</div>
					</div>
				</div>
				<div className="col-12">
					Border Countries: {country.borders ? country.borders.map(border => border + ", ") : null}
				</div>
			</div>
    </div>
  );
}

export default CountryPage;
