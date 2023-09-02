module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'style', 'test', 'revert', 'build'],
    ],
  },
  'type-case': [0],
  'type-empty': [0],
  'scope-empyt': [0],
  'scope-case': [0],
  'subject-full-stop': [0, 'never'],
  'subject-case': [0, 'never'],
  'header-max-lenght': [0, 'always', 72],
}
