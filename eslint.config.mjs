import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: import.meta.url, // Required to resolve relative paths
});

export default [
  ...compat.extends(
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "next/core-web-vitals"
  ),

  {
    files: ["**/*.{ts,tsx}"], // Apply rules to TypeScript files
    languageOptions: {
      parser: "@typescript-eslint/parser", // Use TypeScript parser
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    rules: {
      // Allow unused variables starting with _
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { varsIgnorePattern: "^_", argsIgnorePattern: "^_" }
      ],

      // Disable empty interface rule (useful for extending)
      "@typescript-eslint/no-empty-interface": "off",

      // Example Next.js-specific rules
      "@next/next/no-html-link-for-pages": "off",
      "@next/next/no-page-custom-font": "off",
    },
  },
];
