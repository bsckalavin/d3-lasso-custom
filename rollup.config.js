import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";

export default {
  input: "index.js",
  output: {
    file: 'build/d3-lasso.js',
    format: "umd",
    name: "d3",
    globals: {
      "d3-selection": "d3",
      "d3-drag": "d3"
    },
  },
  plugins: [
    nodeResolve({
      browser: true,
      preferBuiltins: false,
      extensions: [".js", ".jsx"]
    }),
    commonjs({
      include: /node_modules/,
      exclude: [ "node_modules/d3-selection/"]
    })
  ]
};