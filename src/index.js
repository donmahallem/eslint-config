/**
 * Package @donmahallem/eslint-config
 * Source https://github.com/donmahallem/eslint-config
 *
 * @ts-check
 */

import { readFileSync } from 'node:fs';
import { join as pathJoin } from 'node:path';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import mochaPlugin from 'eslint-plugin-mocha';
import pluginChaiFriendly from 'eslint-plugin-chai-friendly';
import headers from 'eslint-plugin-headers';
// eslint-disable-next-line no-undef
const packageInfo = JSON.parse(readFileSync(pathJoin(process.cwd(), 'package.json')));

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
    },
    {
        plugins: {
            headers,
        },
        rules: {
            'headers/header-format': [
                'error',
                {
                    source: 'string',
                    content: `Package ${packageInfo.name}\nSource ${packageInfo.homepage}`,
                },
            ],
        },
    }
);
