function DisplayRegionSelected( { region }) {
	
	let regionText = region.charAt(0).toUpperCase()+ region.slice(1);
	return (
		<>
			<option value={region}>{regionText}
			</option>
		</>
	);
}

export default DisplayRegionSelected;