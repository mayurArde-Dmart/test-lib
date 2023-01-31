import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
// import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import packageJson from "./package.json" assert { type: "json" };
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import svg from "rollup-plugin-svg-import";
import PeerDepsExternalPlugin from "rollup-plugin-peer-deps-external";
const BUILDDIR = "dist";
import image from "@rollup/plugin-image";
import copy from "rollup-plugin-copy";

// import tsPlugin from "@rollup/plugin-typescript";

// const packageJson = require("./package.json");

// export default [
//   {
//     input: "src/index.ts",
//     output: [
//       {
//         file: packageJson.main,
//         format: "cjs",
//         sourcemap: true,
//       },
//       {
//         file: packageJson.module,
//         format: "esm",
//         sourcemap: true,
//       },
//     ],
//     plugins: [
//       peerDepsExternal(),
//       PeerDepsExternalPlugin(),
//       resolve(),
//       commonjs(),
//       svg(),
//       typescript({ tsconfig: "./tsconfig.json" }),
//       // typescript({ useTsconfigDeclarationDir: true }),
//       postcss({
//         extensions: [".css"],
//       }),
//     ],
//     // plugins: [resolve(), commonjs(), typescript({ tsconfig: "./tsconfig.json" })],
//   },
//   {
//     input: "dist/esm/types/index.d.ts",
//     output: [{ file: "dist/index.d.ts", format: "esm" }],
//     plugins: [dts()],
//     // NEW
//     external: [/\.css$/],
//   },
// ];

// export default [
//   {
//     input: "src/index.ts",
//     output: [
//       {
//         file: packageJson.main,
//         format: "cjs",
//         sourcemap: true,
//       },
//       {
//         file: packageJson.module,
//         format: "esm",
//         sourcemap: true,
//       },
//     ],
//     plugins: [
//       resolve(),
//       commonjs(),
//       typescript({ tsconfig: "./tsconfig.json" }),

//       // NEW
//       postcss(),
//     ],
//   },
//   {
//     input: "dist/esm/types/index.d.ts",
//     output: [{ file: "dist/index.d.ts", format: "esm" }],
//     plugins: [dts()],

//     // NEW
//     external: [/\.css$/],
//   },
// ];

export default {
  input: "src/index.ts",
  output: [
    {
      format: "cjs",
      dir: BUILDDIR,
      preserveModules: true,
      preserveModulesRoot: "src",
      exports: "named",
    },
    {
      format: "es",
      dir: BUILDDIR + "/es",
      preserveModules: true,
      preserveModulesRoot: "src",
      exports: "named",
    },
  ],
  external: [...Object.keys(packageJson.dependencies || {}), ...Object.keys(packageJson.peerDependencies || {})],
  plugins: [
    // terser(),
    image(),
    commonjs(),
    typescript({ tsconfig: "./tsconfig.json", compilerOptions: { declaration: true, declarationDir: "./types" } }),
    // tsPlugin(),
    // typescript({
    //   typescript: typescript ,
    // }),
    copy({
      targets: [
        { src: "package.json", dest: BUILDDIR + "/" },
        { src: "README.md", dest: BUILDDIR + "/" },
      ],
    }),
  ],
};
