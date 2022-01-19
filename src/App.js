import './App.css';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

import NavBar from './NavBarComp';

/**
 * //// Root Application ///////////////////////////////////////////////////////////
 * @returns HTML for the Root Application
 */
const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch >
      </Switch>
    </BrowserRouter>
  );
}

export default App;