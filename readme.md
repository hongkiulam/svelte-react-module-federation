# Svelte + React Module Federation
Just testing Svelte and React with Module Federation

## Exposing component
```js
exposes: {
  './Header': './src/Header.svelte'
},
```

## Using component
In webpack config, add the remote pointing to a component
```js
remotes: {
  footer: "footer@http://localhost:8082/remoteEntry.js",
  '<module_import_name>': "<module_name>@<url>"
},
```

## Fix Hot Reloading CORS Issue

In webpack config of exposing module, add:
```js
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*"
     },
  },
```

## React in React
> See consumer

In component, import and use as normal

## Svelte in Svelte
> See header

Import the component, but then you have to mount onto a component because webpack has already compiled it
```html
<script>
  import Button from 'button/Button'; // Svelte component
  const mountSvelteComponent = (node, comp) => new comp({target: node})
</script>

<div use:mountSvelteComponent={Button}></div>
```

## React in Svelte
> See header and footer

We need to mount the React component onto an element, but since React requires ReactDOM to render
we need to first expose a named export for handling this within the React component file

```jsx
import React from "react";
import ReactDOM from "react-dom";

const Footer = () => {
  return <footer>footer</footer>;
};
export default Footer;

export const mount = (el) => ReactDOM.render(<Footer />, el);
```

We can then import this helper function and use it to mount the component,
thankfully it can be structured like a svelte action so makes mounting really easy with the `use` directive
```html
<script>
  import * as Footer from 'footer/Footer' // React component
</script>

<div use:Footer.mount></div>
```

## Svelte in React
> see consumer

We need to mount the Svelte component onto a DOM element

```jsx
import React from "react";
import Header from "header/Header"; // Svelte component

const App = () => {
  return (
    <div ref={(el) => new Header({ target: el })}></div>
  );
};

```