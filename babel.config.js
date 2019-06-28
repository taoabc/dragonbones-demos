module.exports = {
  presets: [
    [
      '@babel/preset-env', {
        targets: {
          'electron': '5.0.5' // TODO
        }
      }
    ]
  ]
}
