/** @type {import('eslint').Linter.FlatConfig[]} */
//import TSESlintParser from "@typescript-eslint/parser"
import eslintConfigTypescriptVue from "@vue/eslint-config-typescript/recommended.js"
import eslintConfigPrettier from "@vue/eslint-config-prettier"
import eslintPluginVue from "eslint-plugin-vue"
import eslintTypeScriptPlugin from "@typescript-eslint/eslint-plugin"
//import rushstackEslintPatchModernModuleResolution from "@rushstack/eslint-patch/modern-module-resolution.js"
import stylisticPlugin from "@stylistic/eslint-plugin"
import eslintJs from "@eslint/js"
import vueEslintParser from "vue-eslint-parser"
import typeScriptESlintParser from "@typescript-eslint/parser"

import globals from "globals";

export default [
  {
    ignores: ["dist/**", "node_modules/**", "bin/**", "build/**", "public/**"],
  },
  eslintJs.configs.recommended,
  eslintTypeScriptPlugin.configs.recommended,
  eslintConfigTypescriptVue,
  eslintPluginVue.configs.recommended,
  eslintPluginVue.configs["vue3-recommended"],
  eslintConfigPrettier,
//  rushstackEslintPatchModernModuleResolution,
  { 
    files: ["**/*.vue"],
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    languageOptions: {
      parser: vueEslintParser,
      parserOptions: {
        ecmaVersion: "latest",
        parser: typeScriptESlintParser,
        sourceType: "module",
      },
      globals: {
        ...globals.browser,
        ...globals.es2021,
        "vue/setup-compiler-macros": "readonly",
        //globalVariables
      },
      ecmaVersion: 2021,
      sourceType: "module",
    },
    plugins: [
      eslintPluginVue,
      eslintTypeScriptPlugin,
      stylisticPlugin
    ],
    verbatimModuleSyntax: true,
    rules: {
      "stylisticPlugin.rules.quotes": [
        "error",
        "single"
      ],
    }
  },
];
