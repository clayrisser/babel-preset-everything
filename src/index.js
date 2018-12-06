export default function() {
  return {
    plugins: [
      // Stage 0
      '@babel/plugin-proposal-function-bind',

      // Stage 1
      '@babel/plugin-proposal-do-expressions',
      'babel-plugin-transform-export-extensions',
      'babel-plugin-transform-numeric-separator',
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
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-transform-modern-regexp',
      'babel-plugin-transform-dotall-regex',
      'babel-plugin-transform-unicode-property-regex',
      ['@babel/plugin-proposal-class-properties', { loose: true }]
    ]
  };
}
