import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FAQ from '../src/views/faq/faq';
import Home from '../src/views/home/home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/faq"> <FAQ /> </Route>
        <Route path="/"> <Home /> </Route>
      </Switch>
    </Router>
  );
}

export default App;
