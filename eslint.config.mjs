import js from "@eslint/js";
import globals from "globals";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";

export default [
  js.configs.recommended,
  eslintPluginPrettier,
  {
    files: ["src/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.es2021,
        $: "readonly",
        Chart: "readonly",
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "error",
    },
  },
  {
    files: ["*.{js,mjs,cjs}"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
      sourceType: "module",
    },
  },
];
