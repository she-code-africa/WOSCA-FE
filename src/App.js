import '../src/styles/app.scss';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from "./views/Auth/LoginForm";
import SignUpForm from "./views/Auth/SignUpForm";
import FAQ from '../src/views/faq/faq';
import Events from '../src/views/events/event';
import Home from '../src/views/home/home';
import Dashboard from "../src/views/Dashboard/Dashboard";
import Resources from "../src/views/resources/resources";
import ForgotPassword from "./views/Auth/ForgotPassword"
import ResetPassword from "./views/Auth/ResetPassword"


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact
          path="/signup"
          name="SignUpForm"
          component={SignUpForm} 
        />
        <Route exact
          path="/signin"
          name="LoginForm"
          component={LoginForm}
        />
        <Route exact
          path ="/dashboard"
          component={Dashboard}
        />
        <Route exact
          path ="/forgot-password"
          component={ForgotPassword}
        />
        <Route exact
          path ="/reset-password"
          component={ResetPassword}
        />
        <Route path="/faq"> <FAQ /> </Route>
        <Route path="/resources"> <Resources /> </Route>
        <Route path="/events"> <Events /> </Route>
        <Route path="/"> <Home /> </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
