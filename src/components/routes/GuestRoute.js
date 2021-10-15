import { Route, Redirect } from "react-router-dom";

import { useUserContext } from "../../context/AuthContext"

const GuestRoute = ({ component: Component, ...rest }) => {

  const { user } = useUserContext()

  return (
    <Route
      {...rest}
      render={innerProps => !user ? <Component {...innerProps} /> : <Redirect to="/dashboard" />}
    />
  );
}

export default GuestRoute
