const prod = require('../../helpers/prod');

module.exports = {
  rules: {
    'array-bracket-spacing': [prod(), 'never'],
    'block-spacing': [prod(), 'always'],
    'brace-style': [prod(), '1tbs', { allowSingleLine: true }],
    'camelcase': prod(),
    'comma-dangle': [prod(), 'always-multiline'],
    'comma-spacing': prod(),
    'comma-style': prod(),
    'computed-property-spacing': prod(),
    'eol-last': [prod(), 'always'],
    'func-call-spacing': [prod(), 'never'],
    'func-style': [prod(), 'declaration', { allowArrowFunctions: true }],
    'function-paren-newline': 'error',
    'implicit-arrow-linebreak': ['error', 'beside'],
    'indent': ['error', 2, { SwitchCase: 1 }],
    'key-spacing': prod(),
    'keyword-spacing': prod(),
    'linebreak-style': prod('off'),
    'lines-between-class-members': prod(),
    'new-cap': 'error',
    'new-parens': 'error',
    'no-array-constructor': 'error',
    'no-lonely-if': 'error',
    'no-mixed-operators': 'error',
    'no-multiple-empty-lines': [prod(), { max: 2, maxEOF: 1 }],
    'no-negated-condition': prod(),
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-tabs': 'error',
    'no-trailing-spaces': prod(),
    // 'no-underscore-dangle': ['error', {
    //   allow: ['__vue__'],
    //   allowAfterThis: true,
    //   allowAfterSuper: true,
    // }],
    'no-unneeded-ternary': prod(),
    'no-whitespace-before-property': prod(),
    'object-curly-spacing': [prod(), 'always'],
    'one-var': 'error',
    'operator-assignment': 'error',
    'operator-linebreak': [prod(), 'after', { overrides: { } }],
    'padded-blocks': prod(),
    'padding-line-between-statements': [
      prod(),
      // Always require blank lines after directive (like 'use-strict'), except between directives
      { blankLine: 'always', prev: 'directive', next: '*' },
      { blankLine: 'any', prev: 'directive', next: 'directive' },
      // Always require blank lines after import, except between imports
      { blankLine: 'always', prev: 'import', next: '*' },
      { blankLine: 'any', prev: 'import', next: 'import' },
      // Always require blank lines before and after every sequence of variable declarations and export
      { blankLine: 'always', prev: '*', next: ['const', 'let', 'var', 'export'] },
      { blankLine: 'always', prev: ['const', 'let', 'var', 'export'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let', 'var', 'export'], next: ['const', 'let', 'var', 'export'] },
      // Always require blank lines before and after class declaration, if, do/while, switch, try
      { blankLine: 'always', prev: '*', next: ['if', 'class', 'for', 'do', 'while', 'switch', 'try', 'with'] },
      { blankLine: 'always', prev: ['if', 'class', 'for', 'do', 'while', 'switch', 'try', 'with'], next: '*' },
      // Always require blank lines before return statements
      { blankLine: 'always', prev: '*', next: 'return' },
    ],
    'prefer-object-spread': prod(),
    'quote-props': [prod(), 'consistent-as-needed'],
    'quotes': [prod(), 'single'],
    'semi': [prod(), 'always'],
    'semi-spacing': prod(),
    'semi-style': [prod(), 'last'],
    'space-before-blocks': [prod(), 'always'],
    'space-before-function-paren': [prod(), 'always'],
    'space-in-parens': [prod(), 'never'],
    'space-infix-ops': ['error', { int32Hint: false }],
    'spaced-comment': [prod(), 'always', { block: { balanced: true } }],
    'switch-colon-spacing': prod(),
    'template-tag-spacing': [prod(), 'always'],
    // ECMAScript 6
    'arrow-body-style': [prod(), 'as-needed'],
    'arrow-parens': [prod(), 'as-needed'],
    'arrow-spacing': prod(),
    'no-duplicate-imports': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-var': prod(),
    'object-shorthand': prod(),
    'prefer-arrow-callback': prod(),
    'prefer-const': prod(),
    'prefer-numeric-literals': 'error',
    'prefer-spread': 'error',
    'prefer-template': prod(),
    'rest-spread-spacing': ['error', 'never'],
    'template-curly-spacing': [prod(), 'never'],
  },
};
