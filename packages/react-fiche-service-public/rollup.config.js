import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import replace from "rollup-plugin-replace";
import babel from "rollup-plugin-babel";

export default {
  input: "src/index.js",
  output: [
    {
      file: "lib/index.js",
      format: "cjs"
    },
    {
      file: "lib/index.esm.js",
      format: "esm"
    }
  ],
  external: ["react", "react-dom", "prop-types", "styled-components"],
  plugins: [
    resolve({
      mainFields: ["module", "jsnext", "jsnext:main", "main"]
    }),
    commonjs({
      exclude: "src/**"
    }),
    replace({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    babel({
      exclude: "node_modules/**"
    })
  ],
  watch: {
    include: "src/**"
  }
};
