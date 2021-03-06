import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import svgr from "@svgr/rollup";
import url from "rollup-plugin-url";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import pkg from "./package.json";

const extensions = [".js", ".ts", ".tsx"];

process.env.BABEL_ENV = "production";

export default {
  input: "./src/index.ts",
  plugins: [
    peerDepsExternal(),
    resolve({ extensions }),
    babel({ extensions, include: ["src/**/*"], runtimeHelpers: true }),
    url(),
    svgr(),
  ],
  output: [{ file: pkg.module, format: "es" }],
};
