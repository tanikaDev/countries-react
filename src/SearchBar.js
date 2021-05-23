function SearchBar({search}) {
	function handleSearchInput(event) {
		let searchValue = event.target.value
		search(searchValue)
	};

	return (
		<div className="search-input col-12 col-md-6">
			<input 
				type="text" 
				id="customerName"
				placeholder="Search Countries"
				onChange={handleSearchInput}>
			</input>
		</div>
	);
}

export default SearchBar;