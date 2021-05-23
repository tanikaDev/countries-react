import DisplayCountry from "./DisplayCountry"

function CountriesList({ countries }) {
	return (
			<div className="row row-cols-1 row-cols-md-3 row-cols-lg-4">
				{countries.map((country) => (
					<DisplayCountry key={country.numericCode} country={country}/>
				))}
			</div>
	);
}

export default CountriesList;