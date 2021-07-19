import { editFile, untilUpdated } from "../scripts/test-utils";
import { port } from "./serve";
import fetch from "node-fetch";

const url = `http://localhost:${port}`;

test("/", async () => {
  await page.goto(url);
  expect(await page.textContent("h1")).toMatch("Home");
  // should not have hydration mismatch
  browserLogs.forEach((msg) => {
    expect(msg).not.toMatch("Expected server HTML");
  });

  // raw http request
  const html = await (await fetch(url)).text();
  expect(html).toMatch("Todo List :");
});

test("/about", async () => {
  await page.goto(url + "/about");
  expect(await page.textContent("h1")).toMatch("About");
  // should not have hydration mismatch
  browserLogs.forEach((msg) => {
    expect(msg).not.toMatch("Expected server HTML");
  });

  // raw http request
  const aboutHtml = await (await fetch(url + "/about")).text();
  expect(aboutHtml).toMatch("Reactplate is Minimal Setup & Fast Boilerplate");
});

// test("hmr", async () => {
//   editFile("src/pages/Home.jsx", (code) =>
//     code.replace("<h1>Home", "<h1>changed")
//   );
//   await untilUpdated(() => page.textContent("h1"), "changed");
// });

// test("client navigation", async () => {
//   await untilUpdated(() => page.textContent('a[href="/about"]'), "About");
//   await page.click('a[href="/about"]');
//   await untilUpdated(() => page.textContent(".about-reactplate"), "About");
//   editFile("src/pages/About.jsx", (code) =>
//     code.replace(
//       '<div class="about-reactplate">Reactplate is Minimal Setup &amp; Fast Boilerplate For',
//       '<div class="about-reactplate">Reactplate is Cool, Minimal Setup &amp; Fast Boilerplate For'
//     )
//   );
//   await untilUpdated(() => page.textContent(".about-reactplate"), "changed");
// });