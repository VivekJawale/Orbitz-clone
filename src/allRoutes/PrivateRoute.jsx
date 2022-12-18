import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const { isAuth } = useSelector((store) => store.auth);

  if (!isAuth) {
    return <Navigate to="/signin" replace={true} />;
  }
  return children;
};
