<p align="center">
    <img src="/examples/src/assets/img/Reactplate.gif"></img>
</p>

<p align="center">
    A Minimal Setup & Fast Boilerplate for <a href="https://reactjs.org/">React.js</a> with <a href="https://vitejs.dev/">Vite</a>
</p>

## Features

🚀 Dynamic Pages Routing with react-router-dom from <a href="https://reactjs.org/">React.js</a><br/>
🚀 Fast development with <a href="https://vitejs.dev/">Vite</a><br/>
🚀 SSR support with <a href="https://vitejs.dev/">Vite</a><br/>
🚀 PWA support with <a href="https://vitejs.dev/">Vite</a><br/>
🚀 SSG support with <a href="https://vitejs.dev/">Vite</a>

---

## Installation

### create-reactplate-app

```bash
npx create-reactplate-app blog-starter

cd blog-starter

npm install

# run server (development mode)
npm run dev
# run server (production mode)
npm run serve
# run debugger
npm run debug

# build the client side & the server side project
npm run build

# build the client side project
npm run build:client

# build the server side project
npm run build:server

# static site generate
npm run generate
```

or using <a href="https://github.com/google/zx">Google/Zx</a>

```bash
zx https://raw.githubusercontent.com/fauzan121002/reactplate/template-generator/bin/create-reactplate-app blog-starter
```

### Development

For further development and contributions, please follow the installation instructions below.

```bash
git clone https://github.com/fauzan121002/reactplate.git

# Reactplate CRA cli scope
cd reactplate

#----------------------------------

# Reactplate app scope
cd reactplate/examples

npm install

# run server (development mode)
npm run dev
# run server (production mode)
npm run serve
# run debugger
npm run debug

# build the client side & the server side project
npm run build

# build the client side project
npm run build:client

# build the server side project
npm run build:server

# static site generate
npm run generate
```

## Built-in Configuration

### Import Aliases

- `@` equals to `_ROOT_/src`
- `#` equals to `_ROOT_/src/components`
- `%` equals to `_ROOT_/src/assets`

### ESBuild

ESBuild already injects `import React from 'react';` for any .jsx files so you don't need to import it again.

### Dynamic Pages Routing

Reactplate Dynamic Pages Routing folder structure works like [Next.js](https://nextjs.org/docs/routing/introduction).

```
pages
│   Home.jsx
│   About.jsx
│
└───Rank
│   │   [rank].jsx
│   └───subfolder1
│       │   [others].jsx
│       │   ...
```

Using the params example

```jsx
// Rank/[rank].jsx
import { useParams } from "react-router-dom";

export default function rank() {
  const { rank } = useParams();
  return <div>Reactplate will be number {rank}</div>;
}
```

**Note** : Index page will refer to **Home.jsx**

### URL Convertion

Reactplate will convert any jsx files filename with PascalCase or camelCase to kebab-case.

Example :

```
pages
│   Home.jsx
│   AboutMe.jsx
│
└───myRank
│   │   [rank].jsx
│   └───subfolder1
│       │   [others].jsx
│       │   ...
```

will be converted to :

```
/home
/about-me
/my-rank/:rank
/my-rank/:rank/subfolder1/:others
...
```

---

## License

Reactplate using the [MIT License](./LICENSE)

## Credits

Credits to <a href="https://reactjs.org/">React.js</a> and <a href="https://vitejs.dev/">Vite</a> teams for their awesome open source and resources!
