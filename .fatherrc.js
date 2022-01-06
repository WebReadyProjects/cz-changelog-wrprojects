module.exports = {
  entry: 'packages/cz-changelog-wrprojects/src/index.js',
  cjs: {
    type: 'babel',
    minify: true,
    lazy: true,
  },
  target: 'node',
  extraBabelPlugins: ['add-module-exports'],
};
