import logo from './logo.svg';
import '../src/styles/app.scss';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from '../src/views/Dashboard/Dashboard';
import LoginForm from "./views/Auth/LoginForm";
import SignUpForm from "./views/Auth/SignUpForm";

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
    </Switch>
    </BrowserRouter>
  );
}

export default App;
