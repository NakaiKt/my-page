module.exports = {
  plugins: ["import"],
  rules: {
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        groups: ["builtin", "external", "parent", "sibling", "index"],
      },
    ],
  },
};
