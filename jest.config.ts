import type { Config } from '@jest/types'

export default async (): Promise<Config.InitialOptions> => {
  return {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
    transform: {
      '^.+\\.vue$': 'vue-jest',
      '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
      '^.+\\.ts?$': 'ts-jest'
    },
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
      '\\.(vue)$': 'vue-jest',
    },
    testMatch: [
      '<rootDir>/src/**/*.spec.ts'
    ],
    collectCoverageFrom: [
      '<rootDir>/src/**/*.{ts,vue}',
      '!<rootDir>/src/main.ts',
      '!<rootDir>/src/router/index.ts',
      '!<rootDir>/src/**/index.ts',
      '!**/node_modules/**'
    ],
    coverageDirectory: '<rootDir>/coverage',
    globals: {
      'ts-jest': {
        tsconfig: 'tsconfig.json'
      }
    }
  }
}