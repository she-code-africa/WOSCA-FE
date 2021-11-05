import '../src/styles/app.scss';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from "./views/Auth/LoginForm";
import SignUpForm from "./views/Auth/SignUpForm";
import FAQ from '../src/views/faq/faq';
import Events from '../src/views/events/event';
import Home from '../src/views/home/home';
import Dashboard from "../src/views/Dashboard/Dashboard";
import Resources from "../src/views/resources/resources";
import ForgotPassword from "./views/Auth/ForgotPassword";
import ResetPassword from "./views/Auth/ResetPassword";
import Admin from "./views/admin/joint";
import AdminLogin from "./views/admin/LoginForm"
import AdminSignup from "./views/admin/SignUpForm"

import { ProtectedRoute, GuestRoute } from './components/routes';

import { UserProvider } from "./context/AuthContext"

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Switch>
          <GuestRoute exact
            path="/admin/login"
            name="AdminLogin"
            component={AdminLogin}
          />
          <GuestRoute exact
            path="/admin/request_access"
            name="AdminSignup"
            component={AdminSignup}
          />
          <GuestRoute exact
            path="/signup"
            name="SignUpForm"
            component={SignUpForm} 
          />
          <GuestRoute exact
            path="/signin"
            name="LoginForm"
            component={LoginForm}
          />
          <ProtectedRoute exact
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
          <Route path="/admin"> <Admin /> </Route>
          <Route path="/faq"> <FAQ /> </Route>
          <Route path="/resources"> <Resources /> </Route>
          <Route path="/events"> <Events /> </Route>
          <Route path="/"> <Home /> </Route>

        </Switch>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
