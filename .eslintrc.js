module.exports = {
  extends: ["next"],
  ignorePatterns: ["node_modules", "dist", "/*.js", "/*.cjs"],
  rules: {
    "react/jsx-sort-props": [
      "warn",
      {
        callbacksLast: true,
        shorthandFirst: true,
        reservedFirst: ["key", "ref"],
      },
    ],
  },
};
