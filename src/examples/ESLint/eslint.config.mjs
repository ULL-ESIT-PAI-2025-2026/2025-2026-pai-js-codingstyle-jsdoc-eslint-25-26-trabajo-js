import globals from 'globals';
import pluginJs from '@eslint/js';
import {FlatCompat} from '@eslint/eslintrc';

const compat = new FlatCompat();

export default [
  {
    languageOptions: {
      globals: globals.node,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },

  pluginJs.configs.recommended, // recommended/all

  ...compat.extends('google'),

  {
    rules: {
      'valid-jsdoc': 'off',
      'require-jsdoc': 'off',
    },
  },
];

