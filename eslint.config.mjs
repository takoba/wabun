import path from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import typescriptESLint from '@typescript-eslint/eslint-plugin'
import typescriptESLintParser from '@typescript-eslint/parser'
import importPlugin from 'eslint-plugin-import'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import globals from 'globals'

// @see https://github.com/eslint/eslintrc?tab=readme-ov-file#usage-esm
// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  resolvePluginsRelativeTo: __dirname,
})

export default [
  js.configs.recommended,
  eslintPluginPrettierRecommended,
  ...compat.extends('plugin:import/errors', 'plugin:import/typescript', 'plugin:@typescript-eslint/recommended'),
  {
    files: ['eslint.config.mjs', 'src/**/*.{ts,tsx}', 'test/**/*.ts'],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: typescriptESLintParser,
    },
    plugins: {
      ...compat.plugins('import'),
      '@typescript-eslint': typescriptESLint,
    },
    rules: {
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      'no-unused-vars': 'off',
      'sort-imports': 'off',
      'import/order': [
        'error',
        {
          alphabetize: {
            order: 'asc',
          },
        },
      ],
    },
    settings: {
      ...importPlugin.configs.typescript.settings,
      'import/resolver': {
        typescript: [],
      },
    },
  },
]
