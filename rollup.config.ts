import { defineConfig } from "rollup";
import typescript from "rollup-plugin-typescript2";
import pkg from "./package.json";

export default defineConfig({
  input: "./src/index.ts",
  cache: false,
  output: [
    {
      file: pkg.module,
      format: "es",
      exports: "named",
    },
    {
      file: pkg.main,
      format: "cjs",
      exports: "named",
    },
  ],
  plugins: [
    typescript({
      exclude: ["node_modules"],
      tsconfigOverride: {
        exclude: ["**/__tests__", "**/*.test.ts"],
      },
      clean: true,
      tsconfig: "./tsconfig.json",
    }),
  ],
});
