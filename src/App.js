import './App.css';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

/**
 * //// Root Application ///////////////////////////////////////////////////////////
 * @returns HTML for the Root Application
 */
const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
