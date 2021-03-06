/*
 * Package @donmahallem/eslint-config
 * Source https://github.com/donmahallem/eslint-config
 */

/* eslint-env es6*/
import { join as pathJoin } from 'path';
// eslint-disable-next-line @typescript-eslint/no-var-requires,@typescript-eslint/no-unsafe-assignment
const packageInfo = require(pathJoin(process.cwd(), 'package.json'));

/**
 * Missing rules
 * 'import-spacing','static-this':,'switch-final-break','typedef','whitespace'
 */
module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:jsdoc/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        sourceType: 'module',
    },
    plugins: ['jsdoc', 'eslint-plugin-prefer-arrow', 'eslint-plugin-import', 'eslint-plugin-no-null', 'header', '@typescript-eslint'],
    rules: {
        '@typescript-eslint/naming-convention': [
            'error',
            {
                format: ['UPPER_CASE'],
                selector: 'enumMember',
            },
        ],
        '@typescript-eslint/unbound-method': 'off',
        'header/header': [
            2,
            'block',
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            ['', ` * Package ${packageInfo.name as string}`, ` * Source ${packageInfo.homepage as string}`, ' '],
            2,
        ],
        'import/order': [
            'error',
            {
                alphabetize: {
                    caseInsensitive: false,
                    order: 'asc',
                },
                groups: [['external', 'builtin'], ['sibling', 'parent', 'internal'], 'index', 'object', 'type'],
            },
        ],
        'max-len': [
            'error',
            {
                code: 140,
            },
        ],
        'no-multiple-empty-lines': ['error', { max: 2, maxBOF: 1 }],
        'quote-props': ['error', 'as-needed'],
        quotes: ['error', 'single', { allowTemplateLiterals: true }],
        'sort-keys': [
            'error',
            'asc',
            {
                caseSensitive: true,
                minKeys: 2,
                natural: false,
            },
        ],
    },
};
