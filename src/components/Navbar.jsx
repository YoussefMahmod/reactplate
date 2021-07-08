import { NavLink } from "react-router-dom";
import { routes } from "@/router";

export default function Navbar() {
  return (
    <>
      <nav>
        <ul className="nav-menu">
          {routes.map(({ name, path }) => {
            return (
              <li className="nav-item" key={path}>
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
