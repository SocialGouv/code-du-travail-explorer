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
  external: ["prop-types", "react", "react-dom", "styled-components"],
  plugins: [
    babel({ exclude: /node_modules/ }),
    resolve({
      mainFields: ["module", "jsnext", "jsnext:main", "main"]
    }),
    commonjs(),
    replace({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
    })
  ],
  watch: {
    include: "src/**"
  }
};
