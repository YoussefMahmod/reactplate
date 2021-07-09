import parseUrlString from "./parse-url-string";
import indexOfObject from "./index-of-object";
import moveItem from "./move-item";

export default function parseUrl(pages) {
  const routes = Object.keys(pages).map((path) => {
    const name = path.match(/\.\/pages\/(.*)\.jsx$/)[1];
    return {
      name,
      path: name === "Home" ? "/" : `/${parseUrlString(name).toLowerCase()}`,
      component: pages[path].default,
    };
  });

  let homeIndex = indexOfObject(routes, "name", "Home");

  moveItem(routes, homeIndex, 0);

  return routes;
}
