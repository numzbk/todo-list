// import { Route, Routes } from "react-router-dom";
import { Link, Route, Routes } from "react-router-dom";
import GlobalProvider from "./globalContext";
import { Layout } from "./layout";
import { Login } from "./login";
import { Protected } from "./protected";
import { RequireAuth } from "./requireAuth";
import "./styles.css";

export default function App() {
  return (
    <GlobalProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/login" element={<Login />} />
          <Route
            path="/protected"
            element={
              <RequireAuth>
                <Protected />
              </RequireAuth>
            }
          />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </GlobalProvider>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>
        Not Found Page <Link to="/login">Loign</Link>
      </h2>
    </div>
  );
}
