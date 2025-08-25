import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Configuration de base Next.js
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  
  // Règles personnalisées optimisées
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {
      // Performance & Best Practices
      "no-unused-vars": "error",
      "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
      "prefer-const": "error",
      "no-var": "error",
      "object-shorthand": "error",
      
      // React/Next.js spécifiques
      "@next/next/no-img-element": "error",
      "@next/next/no-page-custom-font": "error",
      "react/no-unescaped-entities": "error",
      "react/jsx-key": "error",
      "react/hook-use-state": "error",
      "react/jsx-no-duplicate-props": "error",
      
      // TypeScript amélioré
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          "argsIgnorePattern": "^_",
          "varsIgnorePattern": "^_",
        }
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/prefer-nullish-coalescing": "error",
      "@typescript-eslint/prefer-optional-chain": "error",
      "@typescript-eslint/no-unnecessary-condition": "error",
      
      // Import/Export optimisé
      "import/order": [
        "error",
        {
          "groups": [
            "builtin",
            "external", 
            "internal",
            "parent",
            "sibling",
            "index"
          ],
          "newlines-between": "always",
          "alphabetize": {
            "order": "asc",
            "caseInsensitive": true
          }
        }
      ],
      
      // Accessibilité
      "jsx-a11y/alt-text": "error",
      "jsx-a11y/aria-props": "error",
      "jsx-a11y/aria-proptypes": "error",
      "jsx-a11y/aria-unsupported-elements": "error",
      "jsx-a11y/role-has-required-aria-props": "error",
      "jsx-a11y/role-supports-aria-props": "error",
    }
  },
  
  // Configuration spécifique aux fichiers de config
  {
    files: ["*.config.{js,ts,mjs}"],
    rules: {
      "no-console": "off",
      "@typescript-eslint/no-var-requires": "off",
    }
  },
  
  // Configuration pour les composants de pages
  {
    files: ["src/app/**/page.tsx", "src/app/**/layout.tsx"],
    rules: {
      "import/no-default-export": "off", // Pages nécessitent export default
    }
  },
  
  // Configuration pour les fichiers de test
  {
    files: ["**/*.test.{js,jsx,ts,tsx}", "**/*.spec.{js,jsx,ts,tsx}"],
    rules: {
      "no-console": "off",
      "@typescript-eslint/no-explicit-any": "off",
    }
  },
];

export default eslintConfig;