const eslintConfig = [
  ...compat.config({
    extends: ["next"], // Keeps Next.js recommended settings
    rules: {
      "react/no-unescaped-entities": "off",
      "@next/next/no-page-custom-font": "off",

      // Disable TypeScript-specific checks
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/ban-types": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/strict-boolean-expressions": "off",
      "@typescript-eslint/no-unused-vars": "off",
    },
  }),
];

export default eslintConfig;
