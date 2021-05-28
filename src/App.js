import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FAQ from '../src/views/faq/faq';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/faq"> <FAQ /> </Route>
      </Switch>
    </Router>
  );
}

export default App;
