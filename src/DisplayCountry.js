import { Link } from 'react-router-dom';

function DisplayCountry({ country }) {
	
	return (
		<div className="col mb-4">
			<div className="card">
				<Link to={`/CountryPage/${country.name}`}>
					<img src={country.flag} className="card-img-top" alt="..." />
				</Link>
				
				<div className="card-body">
					<h5 className="card-title">{country.name}</h5>
					<p className="card-text"><strong>Population: </strong>{country.population}</p>
					<p><strong>Region: </strong>{country.region}</p>
					<p><strong>Capital: </strong>{country.capital}</p>
				</div>
			</div>
		</div>
		
	);
}

export default DisplayCountry;