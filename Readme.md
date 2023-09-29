# esbuild-plugin-pug

Import plugin for [pug](https://pugjs.org/) (and jade) files for [esbuild](https://esbuild.github.io/)

This plugin is based on [esbuild-plugin-pug](https://github.com/adamjberg/esbuild-plugin-pug), but instead of returning HTML, it returns the compiled function. This allows you to pass input data to the template, and it also supports [includes](https://pugjs.org/language/includes.html) in your templates.

## Install

```bash
npm i -D @ymulenll/esbuild-plugin-pug
```

## Use

First add the plugin to esbuild

```js
const pugPlugin = require("esbuild-plugin-pug");

require("esbuild")
  .build({
    entryPoints: ["index.ts"],
    outfile: "out.js",
    bundle: true,
    platform: "node",
    plugins: [pugPlugin()],
  })
  .catch(() => process.exit(1));
```

Then, you can import `.pug` (and `.jade`) files in your code

```js
import compiledFunction from "./template.pug";

compiledFunction({
  title: "Hello, world!",
  message: "This is a test.",
});
```
