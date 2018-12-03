import fs from "fs-extra";
import path from "path";

const options = {
  bundle: {
    path: "./node_modules/@paciolan/dynamic-loader/dist/bundle.js"
  },
  generate: {
    format: "iife"
  },
  html: {
    input: "./src/loader.html",
    output: {
      path: "./dist",
      filename: "loader.html"
    },
    injectAt: "/* INJECT-CODE-HERE */"
  }
};

const readFile = file => fs.readFile(file, "utf8");

(async () => {
  try {
    const code = (await readFile(options.bundle.path)).trim();
    const template = await readFile(options.html.input);
    const output = template.replace(options.html.injectAt, code);

    await fs.ensureDir(options.html.output.path);
    await fs.writeFile(path.join(options.html.output.path, options.html.output.filename), output);
    console.log(`Bundle ${options.bundle.path} injected into loader.html (${output.length} bytes)`);
  } catch (err) {
    console.log(err);
  }
})();
