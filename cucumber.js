module.exports = {
  default: [
    '--require setup/assertions.js',
    '--require setup/hooks.js',
    '--require stepdefinitions/**/*.js',
    'features/**/*.feature'
  ].join(' ')
};