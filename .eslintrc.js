module.exports = {
    root: true,
    env: {
        node: true,
        es6: true
    },
    extends: [
        'plugin:vue/essential',
        '@vue/airbnb',
    ],
    rules: {
        semi: 0,
        'no-alert': 0,
        'no-console': 'off',
        'linebreak-style': 0,
        indent: ['error', 4, { SwitchCase: 1 }],
        'arrow-parens': 0,
        'vue/no-v-html': 0,
        camelcase: 0,
        'generator-star-spacing': 0,
        'space-before-function-paren': [
            'error',
            'never'
        ],
        'comma-dangle': [
            'error',
            'only-multiline'
        ],
        'max-len': [2, { code: 300, tabWidth: 4, ignoreUrls: true }],
        'no-new': 0,
        'vue/html-indent': ['error', 4],
        'vue/max-attributes-per-line': ['error', {
            singleline: 2,
            multiline: {
                max: 1,
                allowFirstLine: false
            }
        }],
        'vue/html-self-closing': ['error', {
            html: {
                void: 'never',
                normal: 'always',
                component: 'always'
            },
            svg: 'always',
            math: 'always'
        }],
        'no-control-regex': 'off',
        'no-useless-escape': 'off'
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)',
            ],
            env: {
                jest: true,
            },
        },
    ],
}
