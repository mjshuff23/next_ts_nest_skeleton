import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import prettier from 'eslint-plugin-prettier';
import parser from '@typescript-eslint/parser';

export default [
  {
    ignores: ['node_modules'],
    plugins: {
      '@typescript-eslint': typescriptEslintPlugin,
      prettier,
    },
    languageOptions: {
      parser,
      parserOptions: {
        project: './tsconfig.base.json',
        sourceType: 'module',
      },
    },
    rules: {
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
  },
];
