module.exports = {
  env: {
    browser: true
  },
  parser: "babel-eslint",
  extends: ["airbnb", "prettier"],
  plugins: ["prettier", "react", "import", "jsx-a11y"],
  rules: {
    "prettier/prettier": ["error"],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/forbid-prop-types": 0,
    "jsx-a11y/label-has-for": 0
  }
};
