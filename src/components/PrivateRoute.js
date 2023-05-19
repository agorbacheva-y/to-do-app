import { authenticate } from "../helpers";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const auth = authenticate();

  // if authentication is true, ok to render children
  // if authentication false, navigate to login pg
  return auth ? children : <Navigate to="/login" />
}
export default PrivateRoute;