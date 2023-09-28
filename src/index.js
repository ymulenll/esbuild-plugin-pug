const { readFile } = require("fs").promises;
const { dirname } = require("path");
const pug = require("pug");

const pluginPug = () => ({
  name: "pug",
  setup(build) {
    build.onLoad({ filter: /\.(jade|pug)$/ }, async (args) => {
      const template = await readFile(args.path, "utf8");

      const compiled = pug.compileClient(template, {
        filename: args.path,
        basedir: dirname(args.path),
      });

      const contents = `${compiled}\n\nexport default template;`;

      return { contents, loader: "js" };
    });
  },
});

module.exports = pluginPug;
