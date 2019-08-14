import { declare } from '@babel/helper-plugin-utils';

export default declare((_api, _opts) => {
  return {
    plugins: [
      // Stage 0
      '@babel/plugin-proposal-function-bind',

      // Stage 1
      '@babel/plugin-proposal-do-expressions',
      '@babel/plugin-syntax-export-extensions',
      '@babel/plugin-proposal-numeric-separator',
      ['@babel/plugin-proposal-optional-chaining', { loose: false }],

      // Stage 2
      '@babel/plugin-proposal-function-sent',
      '@babel/plugin-syntax-import-meta',
      [
        '@babel/plugin-proposal-decorators',
        {
          legacy: true
        }
      ],

      // Stage 3
      '@babel/plugin-proposal-unicode-property-regex',
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-transform-dotall-regex',
      'babel-plugin-transform-modern-regexp',
      ['@babel/plugin-proposal-class-properties', { loose: true }],

      // Stage 4
      '@babel/plugin-transform-runtime'
    ]
  };
});
