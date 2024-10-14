import baseConfig from '../eslint.config.js';

export default [
  {
    ...baseConfig,
    rules: {
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'on',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'on',
    },
    ignores: ['db', 'node_modules'],  // Add 'db' to the ignored directories
  }
];
