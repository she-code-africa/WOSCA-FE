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
import User from "./views/admin/users";
import Program from "./views/admin/programs";
import Repos from "./views/admin/repos";
import AdminEvent from "./views/admin/events";
import Programs from "./views/programs/programs";
import ProgramOverview from "./views/programs/overview";
import ConParticipant from "./views/programs/participants";
import ConMentor from "./views/programs/mentors";
import ConSponsor from "./views/programs/sponsors";


import { ProtectedRoute, GuestRoute } from './components/routes';

import { UserProvider } from "./context/AuthContext"

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Switch>
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
            path="/dashboard"
            component={Dashboard}
          />
          <Route exact
            path="/forgot-password"
            component={ForgotPassword}
          />
          <Route exact
            path="/reset-password"
            component={ResetPassword}
          />
          <Route path="/repos"> <Repos /> </Route>
          <Route path="/users"> <User /> </Route>
          <Route path="/adm/events"> <AdminEvent /> </Route>
          <Route path="/adm/programs"> <Program /> </Route> 
          <Route path="/admin"> <Admin /> </Route>
          <Route path="/faq"> <FAQ /> </Route>
          <Route path="/resources"> <Resources /> </Route>
          <Route path="/events"> <Events /> </Route>
          <Route exact path="/programs"> <Programs /> </Route>
          <Route exact path="/contributhon/overview"> <ProgramOverview /> </Route>
          <Route exact path="/contributhon/participants"> <ConParticipant /> </Route>
          <Route exact path="/contributhon/mentors"> <ConMentor /> </Route>
          <Route exact path="/contributhon/sponsors"> <ConSponsor /> </Route>
          <Route path="/"> <Home /> </Route>

        </Switch>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
