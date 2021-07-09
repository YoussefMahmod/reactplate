import { Route } from "react-router-dom";
import parseUrl from "@/utils/core/parse-url.js";

const pages = import.meta.globEager("./pages/**/*.jsx");

export const routes = parseUrl(pages);

export function Routes() {
  return (
    <>
      {routes.map(({ path, component: Component }) => {
        return (
          <Route exact key={path} path={path}>
            <Component />
          </Route>
        );
      })}
    </>
  );
}
