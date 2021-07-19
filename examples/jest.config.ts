// eslint-disable-next-line node/no-extraneous-import
import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testMatch: ["**/*.spec.[jt]s?(x)"],
  testTimeout: process.env.CI ? 30000 : 10000,
  globalSetup: "./scripts/jest-global-setup.js",
  globalTeardown: "./scripts/jest-global-teardown.js",
  testEnvironment: "./scripts/jest-env.js",
  setupFilesAfterEnv: ["./scripts/test-setup.ts"],
  watchPathIgnorePatterns: ["<rootDir>/temp"],
  moduleNameMapper: {
    testUtils: "<rootDir>/scripts/test-utils.ts",
  },
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
  },
};

export default config;
