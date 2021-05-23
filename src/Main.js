import React, { useState } from 'react'
import countriesAll from "./countriesAll.json";
import SearchBar from "./SearchBar";
import RegionSelect from "./RegionSelect"
import CountriesList from "./CountriesList";

function Main() {
	const [countries, setCountries] = useState(countriesAll);
	
	let search = searchVal => {
		let formattedSearchValue = searchVal.toLowerCase();
		let filteredSearch = countries.filter(country => {
			return (country.name.toLowerCase().includes(formattedSearchValue) || country.capital.toLowerCase().includes(formattedSearchValue)
			);
		})
		setCountries(filteredSearch)
		if (searchVal === "") {
			setCountries(countriesAll)
		}
	}

	function handleChange(event) {
		console.log(event.target.value);
		let selectedRegion = event.target.value;

		let regionFilter = countriesAll.filter(country => {
			return (
				country.region.toLowerCase() === selectedRegion
			);
		})

		if (selectedRegion === "all") {
			setCountries(countriesAll);
		} else {
			setCountries(regionFilter);
		}
	}

	return (
		<main className="">
			<div className="filter-section row">
				<SearchBar search={search} />
				<RegionSelect countries={countriesAll} changeEvent={handleChange}  />
			</div>
			<CountriesList countries={countries}/>
		</main>
	);
}

export default Main;