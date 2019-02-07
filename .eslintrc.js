module.exports = {
    env: {
        "jest": true
    },
    extends: ["standard", "plugin:prettier/recommended"],
    rules: {
        "prettier/prettier": ["error", {
            "singleQuote": true
        }]
    }
};