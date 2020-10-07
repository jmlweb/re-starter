module.exports = {
  extends: [
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  parserOptions: {
    debugLevel: true,
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
};
