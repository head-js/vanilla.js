module.exports = {
  presets: [
    ['@babel/preset-env', {
      useBuiltIns: 'usage',
      corejs: '3',
      exclude: [
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-private-methods',
        '@babel/plugin-proposal-logical-assignment-operators',
        '@babel/plugin-proposal-numeric-separator',
        '@babel/plugin-proposal-unicode-property-regex',
        '@babel/plugin-transform-dotall-regex',
        '@babel/plugin-transform-unicode-regex',
        // '@babel/plugin-syntax-top-level-await',
      ],
    }]
  ],
}
