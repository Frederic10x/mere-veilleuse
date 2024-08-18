/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['next/core-web-vitals'],
  parserOptions: {
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  rules: {
    'import/no-unresolved': 'error',
    'import/namespace': ['error', { allowComputed: true }],
    'import/default': 'error',
    'import/no-named-as-default': 'error',
  },
}
