import { useState } from 'react';

import './App.css';
import Header from "./Header"
import Main from "./Main"
import CountryPage from "./CountryPage"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import styled, { ThemeProvider } from "styled-components" 
import { lightMode, darkMode, GlobalStyles} from "./Themes"

const StyledApp = styled.div``;

  function App() {
    const [theme, setTheme] = useState("light")
    const handleClick = () => {
      theme === "light" ? setTheme("dark") : setTheme("light")
    }

  return (
    
      <ThemeProvider theme={theme === "light" ? lightMode : darkMode}>
        <GlobalStyles />
        <StyledApp>
        <Router>
          <div className="container">
            <Header theme={theme} modeChanger={ handleClick }/>
            <Switch>
              <Route path="/" exact>
                <Main />
              </Route>
              <Route path="/CountryPage/:name" component={CountryPage} />
            </Switch>
          </div>
        </Router>
        </StyledApp>
      </ThemeProvider>
    
    
  );
}

export default App;
