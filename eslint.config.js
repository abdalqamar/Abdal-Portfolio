import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import importPlugin from "eslint-plugin-import";
import jsxA11y from "eslint-plugin-jsx-a11y";

export default [
  {
    ignores: ["dist", "node_modules"],
  },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },

    settings: {
      react: { version: "detect" },
    },

    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      import: importPlugin,
      "jsx-a11y": jsxA11y,
    },

    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      ...importPlugin.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,

      //  Custom Production Rules
      "no-unused-vars": ["warn"],
      "no-console": ["warn"],
      "no-debugger": "error",

      // React specific
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",

      // Hooks strict
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // Clean code
      "import/order": [
        "warn",
        {
          groups: [["builtin", "external", "internal"]],
          "newlines-between": "always",
        },
      ],

      // Disable annoying ones (practical)
      "react/jsx-no-target-blank": "off",
      "react/jsx-no-comment-textnodes": "off",
      "react/no-unescaped-entities": "off",

      // Vite specific
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
];
