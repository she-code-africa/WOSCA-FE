import logo from './logo.svg';
import '../src/styles/app.scss';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from '../src/views/Dashboard/Dashboard';
import LoginForm from "./views/Auth/LoginForm";
import SignUpForm from "./views/Auth/SignUpForm";
import FAQ from '../src/views/faq/faq';
import Home from '../src/views/home/home';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact
      path="/signup"
      name="SignUpForm"
      component={SignUpForm}/>
      <Route exact
      path="/signin"
      name="LoginForm"
      component={LoginForm}/>
      <Route exact
      path ="/dashboard"
      component={Dashboard}
      />
      <Route path="/faq"> <FAQ /> </Route>
       <Route path="/"> <Home /> </Route>
    
    </Switch>
    </BrowserRouter>
  );
}

export default App;
