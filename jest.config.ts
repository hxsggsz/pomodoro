export default {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "<rootDir>/tests-examples/**/*.spec.ts",
    "**/?(*.)+(spec|test).[tj]s?(x)",
  ],

  roots: ["<rootDir>/src/"],
  modulePaths: ["<rootDir>/src/"],
};
