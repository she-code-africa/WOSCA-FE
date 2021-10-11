import { Route, Redirect } from "react-router-dom";

import { useUserContext } from "../../context/AuthContext"

const ProtectedRoute = ({ component: Component, ...rest }) => {

  const { user } = useUserContext()

  return (
    <Route
      {...rest}
      render={innerProps => user ? <Component {...innerProps} /> : <Redirect to="/signin" /> }
    />
  );
}

export default ProtectedRoute
