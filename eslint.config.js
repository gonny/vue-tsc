/* eslint-env node */
//require("@rushstack/eslint-patch/modern-module-resolution");

export default [
  {
    root: true,
    extends: [
      "plugin:vue/vue3-recommended",
      "eslint:recommended",
      "@vue/eslint-config-typescript/recommended",
      "@vue/eslint-config-prettier",
      "@rushstack/eslint-patch/modern-module-resolution"
    ],
    overrides: [
      {
        env: {
          node: true,
        },
        files: [".eslintrc.{js,cjs}"],
        parserOptions: {
          sourceType: "script",
        },
      },
    ],
    parser: "vue-eslint-parser",
    parserOptions: {
      ecmaVersion: "latest",
      parser: "@typescript-eslint/parser",
      sourceType: "module",
    },
    env: {
      "vue/setup-compiler-macros": true,
        browser: true,
        es2021: true,
    },
  },
];
