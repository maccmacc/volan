import nimbusTechConfig from 'eslint-config-nimbus-tech';
import nextPlugin from '@next/eslint-plugin-next';
import reactPlugin from 'eslint-plugin-react';
import hooksPlugin from 'eslint-plugin-react-hooks';

export default [
    {
        files: ['**/*.ts', '**/*.tsx'],
        plugins: {
            react: reactPlugin,
            'react-hooks': hooksPlugin,
            '@next/next': nextPlugin,
        },
        rules: {
            ...reactPlugin.configs['jsx-runtime'].rules,
            ...hooksPlugin.configs.recommended.rules,
            ...nextPlugin.configs.recommended.rules,
            ...nextPlugin.configs['core-web-vitals'].rules,
            '@next/next/no-img-element': 'error',
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
    {
        ...nimbusTechConfig[0],
        rules: {
            ...nimbusTechConfig[0].rules,
            'check-file/folder-naming-convention': [
                'error',
                {
                    'src/**/': '@(+([a-z])*(-+([a-z]))|\\[+([a-z])*(-+([a-z]))\\])',
                },
            ],
        },
    },
    {
        ignores: ['.next/*', '*.cjs'],
    },
];
