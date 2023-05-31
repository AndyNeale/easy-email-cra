module.exports = {
  extends: ['airbnb', 'react-app', 'plugin:prettier/recommended'],
  plugins: [
    'chai-friendly',
    'cypress',
    'import',
    'jest',
    'jsx-a11y',
    'prettier',
    'react',
    'react-hooks',
  ],
  env: { browser: true, 'cypress/globals': true, jest: true },
  rules: {
    'chai-friendly/no-unused-expressions': 'error',
    'import/extensions': [
      'error',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-cycle': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/prefer-default-export': 'off',
    'jest/no-disabled-tests': 'error',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/valid-expect': 'error',
    'linebreak-style': 'off',
    'no-console': 'off',
    'no-new': 'off',
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'no-underscore-dangle': [
      'error',
      { allow: ['_bind', '_compare', '_checkLastUpdate', '_trackLastUpdate'] },
    ],
    'no-unused-expressions': 'off',
    'prefer-destructuring': 'off',
    'prefer-promise-reject-errors': 'off',
    'react/destructuring-assignment': 'off',
    'react/forbid-prop-types': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-boolean-value': 'off',
    'react/jsx-curly-newline': 'off',
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'react/jsx-fragments': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-deprecated': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        paths: ['./src'],
      },
    },
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      version: 'detect',
    },
  },
  overrides: [
    // Add typescript specific overrides
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'react/require-default-props': 'off',
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'error',
      },
    },
    // Add test file overrides
    {
      files: ['src/__tests__/**/*'],
      rules: {
        'react/jsx-no-constructed-context-values': 'off',
      },
    },
  ],
};
