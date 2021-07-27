import '../src/styles/app.scss';
import { BrowserRouter, Route, Switch } from "react-router-dom";
<<<<<<< HEAD
import Dashboard from '../src/views/Dashboard/Dashboard';
=======
>>>>>>> 52d8af6e95569ce1d2259395f391477046bbd3a4
import LoginForm from "./views/Auth/LoginForm";
import SignUpForm from "./views/Auth/SignUpForm";
import FAQ from '../src/views/faq/faq';
import Events from '../src/views/events/event';
import Home from '../src/views/home/home';

function App() {
  return (
    <BrowserRouter>
<<<<<<< HEAD
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
=======
      <Switch>
        <Route exact
          path="/signup"
          name="SignUpForm"
          component={SignUpForm} />
        <Route exact
          path="/signin"
          name="LoginForm"
          component={LoginForm} />
        <Route path="/faq"> <FAQ /> </Route>
        <Route path="/events"> <Events /> </Route>
        <Route path="/"> <Home /> </Route>

      </Switch>
>>>>>>> 52d8af6e95569ce1d2259395f391477046bbd3a4
    </BrowserRouter>
  );
}

export default App;
