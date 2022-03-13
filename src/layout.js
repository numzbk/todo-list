import { Outlet } from "react-router-dom";
import "./styles.css";
export function Layout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
