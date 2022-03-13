import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "./globalContext";

export function Login() {
  const navigate = useNavigate();
  const {
    setUsername: setUsernameContext,
    username: usernameContext
  } = useContext(GlobalContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const login = (event) => {
    event.preventDefault();
    if (username !== "" && password === "1234") {
      setUsernameContext(username);
      navigate("/protected");
    } else {
      setError("username is empty or password incorrect!!!");
    }
  };

  useEffect(() => {
    console.log(usernameContext);
    if (usernameContext) {
      navigate("/protected");
    }
  }, []);

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={login}>
        <label>
          Username&nbsp;&nbsp;
          <input
            placeholder="Username"
            onChange={(e) => {
              setError(null);
              setUsername(e.target.value);
            }}
          />
        </label>
        <br />
        <label>
          Password&nbsp;&nbsp;
          <input
            placeholder="Password (1234)"
            onChange={(e) => {
              setError(null);
              setPassword(e.target.value);
            }}
          />
          &nbsp;
        </label>
        <br />
        {error && (
          <label style={{ color: "red" }}>
            {error}
            <br />
          </label>
        )}
        <button>Login</button>
      </form>
    </div>
  );
}
