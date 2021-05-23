import DisplayRegionSelected from "./DisplayRegionSelected"

function RegionSelect({ countries, changeEvent }) {

	const regionsArr = ["all", ];
	const regions = countries.filter(country => {
		let countryRegion = country.region.toLowerCase()
		if (!regionsArr.includes(countryRegion)) {
			return regionsArr.push(countryRegion);
		}
		return null;
	})

	return (
		<div className="select-input col-12 col-md-6">
			<select aria-label="Default select example" className="custom-select select-bg" onChange={changeEvent}>
				{regionsArr.map(region => 
					(
						<DisplayRegionSelected key={region} region={region} />
					)
				)}
			</select>
		</div>
	);
}

export default RegionSelect;