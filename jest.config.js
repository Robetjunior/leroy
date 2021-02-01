module.exports = {
  testMatch: ["**/__testes__/**/*.test.js"],
  modulePaths: ["src/"],
  modulePathIgnorePatterns: ["<rootDir>/dist/"],
  coverageDirectory: "<rootDir>/coverage/",
  collectCoverageFrom: [
    "!src/index.js",
    "!src/service/index.js",
    "!src/routes/index.js",
    "!src/App.js",
    "!src/store/reducerPersistor.js",
    "!src/store/modules/rootReducer.js",
    "!src/store/index.js",
    "!candidate-fausto-couto/jest.config.js",
  ],
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect",
    "jest-localstorage-mock",
  ],
  testURL: "http://localhost",
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  moduleFileExtensions: ["js", "jsx"],
  transform: {
    "^.+\\.(js|jsx)?$": "babel-jest",
  },
  moduleNameMapper: {
    "^~/(.*)": "<rootDir>/src/$1",
    "\\.(css|jpg|jpeg|png|gif|svg)$": "<rootDir>/__mocks__/fileMock.js",
  },
};
