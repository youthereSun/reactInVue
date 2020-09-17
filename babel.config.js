module.exports = {
  presets: [
    ['@babel/preset-react'],
    ['@babel/preset-env']
    // '@vue/app'
  ],
  plugins: [
    ['transform-react-jsx'],
    ['@babel/plugin-syntax-dynamic-import'],
    ['@babel/plugin-proposal-class-properties']
  ]
}
