module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  plugins: ['stylelint-scss'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    // recommended rules
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,

    // any other rules you'd want to change e.g.
    'scss/dollar-variable-pattern': '^foo',
    'scss/selector-no-redundant-nesting-selector': true,
  },
}
