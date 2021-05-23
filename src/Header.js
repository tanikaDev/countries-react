function Header( { theme, modeChanger }) {

  console.log(theme)
  const themeInnerText = () => {
    if (theme === "light"){
      return (
        <>
        <i class="fas fa-moon"></i> DarkMode
        </>
      );
    } else {
      return (
        <>
        <i class="fas fa-sun"></i> Light Mode
        </>
      );
      
    }
  }

	return (
      <header className="row justify-content-between header">
        <div className="col-7 heading">
          <h2>Where in the World?</h2>
        </div>
        <div className="light-mode">
          <button type="button" onClick={modeChanger}>{themeInnerText()}</button>   
        </div>
      </header>
	); 
}

export default Header;