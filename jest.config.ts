import type { InitialOptionsTsJest } from 'ts-jest/dist/types';
import { defaults } from 'jest-config';
import { pathsToModuleNameMapper } from 'ts-jest';
import { compilerOptions } from './tsconfig.json';

const config: InitialOptionsTsJest = {
  ...defaults,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.(t|j)s', '!src/**/*.spec.(t|j)s'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/',
  }),
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: ['trace-unhandled/register'],
};

export default config;
