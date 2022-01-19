import './App.css';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBarComp';
import Main from './components/MainComp'

/**
 * //// Root Application ///////////////////////////////////////////////////////////
 * @returns HTML for the Root Application
 */
const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch >
        <Main />
      </Switch>
    </BrowserRouter>
  );
}

export default App;