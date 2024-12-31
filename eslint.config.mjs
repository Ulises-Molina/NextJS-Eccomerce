import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname, // Asegúrate de que la ruta sea correcta
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"), // Extiende la configuración de Next.js
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    parserOptions: {
      ecmaVersion: 2020, // Configuración adicional del parser
      sourceType: "module",
      ecmaFeatures: {
        jsx: true, // Soporte para JSX
      },
    },
  },
];

export default eslintConfig;
