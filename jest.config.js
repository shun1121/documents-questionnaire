export default {
  "preset": "ts-jest",
  "testEnvironment": "jsdom",
  "roots": [
    "<rootDir>/src"
  ],
  "testMatch": [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  "testPathIgnorePatterns": ["<rootDir>/node_modules/"],
}