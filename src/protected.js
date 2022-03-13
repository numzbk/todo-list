import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import DogImageAdd from "./dogImageAdd";
import DogTable from "./dogTable";
import { GlobalContext } from "./globalContext";

export function Protected() {
  const navigate = useNavigate();
  const { username, setUsername } = useContext(GlobalContext);

  const logout = () => {
    setUsername();
    navigate("/login");
  };

  return (
    <div className="App">
      <h1>Protected</h1>
      <label>
        Username : {username}&nbsp;&nbsp;
        <button onClick={() => logout()}>logout</button>
      </label>
      <DogImageAdd />
      <DogTable />
    </div>
  );
}
