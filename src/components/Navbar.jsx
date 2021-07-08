import { NavLink } from "react-router-dom";
import { routes } from "@/router";

export default function Navbar() {
  return (
    <>
      <nav>
        <ul>
          {routes.map(({ name, path }) => {
            return (
              <li key={path}>
                <NavLink exact activeClassName="selected" to={path}>
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
