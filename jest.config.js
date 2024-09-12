const nextJest = require("next/jest");

const createJestConfig = nextJest({ dir: "./" });

const jestConfig = createJestConfig({
  moduleDirectories: ["node_modules", "<rootDir>/src"],

  moduleNameMapper: {
    "^@services/(.*)$": "<rootDir>/src/app/services/$1",
    "^@tests/(.*)$": "<rootDir>/src/app/tests/$1",
  },

  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  transformIgnorePatterns: ["/node_modules/"],
});

module.exports = jestConfig;
