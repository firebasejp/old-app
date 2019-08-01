module.exports = {
    "extends": [
        "standard",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "plugins": [
        "@typescript-eslint"
    ],
    "parserOptions": {
        "sourceType": "module",
        "project": "./tsconfig.json"
    },
    "rules": {
        "lines-between-class-members": ["error", "always", {
            "exceptAfterSingleLine": true
        }],
        "@typescript-eslint/no-unused-vars": "off", // tsconfigと重複
        "@typescript-eslint/prefer-interface": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/member-delimiter-style": ["error", {
            "multiline": {
                "delimiter": "none",
                "requireLast": true
            },
            "singleline": {
                "delimiter": "comma",
                "requireLast": true
            },
        }],
        "@typescript-eslint/explicit-member-accessibility": ["error", {
            "accessibility": 'no-public',
        }],
    }
};