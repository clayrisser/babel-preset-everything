import path from 'path';
import pkgDir from 'pkg-dir';

export default function() {
  return {
    plugins: [
      // Stage 0
      resolve('@babel/plugin-proposal-function-bind'),

      // Stage 1
      resolve('@babel/plugin-proposal-do-expressions'),
      resolve('@babel/plugin-syntax-export-extensions'),
      resolve('@babel/plugin-proposal-numeric-separator'),
      [resolve('@babel/plugin-proposal-optional-chaining'), { loose: false }],

      // Stage 2
      resolve('@babel/plugin-proposal-function-sent'),
      resolve('@babel/plugin-syntax-import-meta'),
      [
        resolve('@babel/plugin-proposal-decorators'),
        {
          legacy: true
        }
      ],

      // Stage 3
      resolve('@babel/plugin-syntax-dynamic-import'),
      resolve('@babel/plugin-transform-dotall-regex'),
      resolve('@babel/plugin-transform-unicode-property-regex'),
      resolve('babel-plugin-transform-modern-regexp'),
      [resolve('@babel/plugin-proposal-class-properties'), { loose: true }]
    ]
  };
}

function resolve(packageName, dirname = __dirname, paths = []) {
  return require.resolve(packageName, {
    paths: [
      path.resolve(pkgDir.sync(process.cwd()), 'node_modules'),
      path.resolve(pkgDir.sync(dirname), 'node_modules'),
      ...paths
    ]
  });
}
