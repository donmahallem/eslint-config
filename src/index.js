// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import mochaPlugin from 'eslint-plugin-mocha';
import pluginChaiFriendly from 'eslint-plugin-chai-friendly';

export default tseslint.config(
    eslint.configs.recommended,
    tseslint.configs.recommended,
    mochaPlugin.configs.flat.recommended,
    pluginChaiFriendly.configs.recommendedFlat,
    {
        files: ['**/*.spec.ts'],
        rules: {
            '@typescript-eslint/no-unused-expressions': 'off',
        },
    }
);
