import { NavLink } from "react-router-dom";
import { routes } from "@/router";

export default function Navbar() {
  return (
    <>
      <nav>
        <ul class='nav-menu'>
          {routes.map(({ name, path }) => {
            return (
              <li class="nav-item" key={path}>
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
