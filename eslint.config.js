import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    languageOptions: {
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended,
];
