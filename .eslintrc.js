module.exports = {
  env: {
    node: true,
    jest: true
  },
  extends: ["eslint:recommended", "plugin:jest/recommended"],
  plugins: ["jest"],
  rules: {
    semi: ["warn", "always"]
  }
};


