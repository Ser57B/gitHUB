module.exports = {
   env: {
      browser: true,
      es2021: true,
      node: true,
   },
   extends: 'airbnb',
   overrides: [
   ],
   parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
   },
   rules: {
      'no-console': 'off',
      'no-plusplus': 'off',
      'no-tabs': 'off',
      indent: ['error', 3, { SwitchCase: 1 }],
      'max-len': ['error', { code: 180, tabWidth: 3 }],
      'eol-last': ['error', 'always'],
      'prefer-destructuring': 'off',
      'no-alert': 'off',
      'no-constant-condition': ['error', { checkLoops: false }],
      'no-param-reassign': ['error', { props: false }],
      'linebreak-style': ['error', 'windows'],
      'func-names': 'off',
      'comma-spacing': 'off',
      'no-restricted-syntax': 'off',
      'no-unreachable-loop': 'off',
      'consistent-return': 'off',
      'no-unused-vars': ['error', { args: 'none' }],
      'no-multi-assign': 'off',
   },
};
