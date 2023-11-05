/* eslint-env node */
//require("@rushstack/eslint-patch/modern-module-resolution");

export default [
  {
    root: true,
    extends: [
      "eslint:recommended",
      "@vue/eslint-config-typescript/recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:vue/vue3-recommended",
      "plugin:vue/base",
      "@vue/eslint-config-prettier",
      "@rushstack/eslint-patch/modern-module-resolution"
    ],
    "verbatimModuleSyntax": true,
    parser: "vue-eslint-parser",
    parserOptions: {
      ecmaVersion: "latest",
      parser: "@typescript-eslint/parser",
      sourceType: "module",
    },
    plugins: ["@stylistic", "vue"],
    files: ["**/*{.vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts}"],
    env: {
      "vue/setup-compiler-macros": true,
        browser: true,
        es2021: true,
    },
  },
];
