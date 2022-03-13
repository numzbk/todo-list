import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "./globalContext";

export function RequireAuth({ children }) {
  const { username } = useContext(GlobalContext);
  if (username) {
    return children;
  } else {
    return (
      <div>
        Not Permission <br /> Goto Login <Link to="/login">Login Page</Link>
      </div>
    );
  }
}
