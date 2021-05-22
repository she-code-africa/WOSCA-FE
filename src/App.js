import logo from './logo.svg';
import '../src/styles/app.scss';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AuthPage from '../src/views/Auth/AuthPage';
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
    
    </Switch>
    </BrowserRouter>
  );
}

export default App;
