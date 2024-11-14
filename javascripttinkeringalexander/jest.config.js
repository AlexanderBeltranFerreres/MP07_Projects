module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transformIgnorePatterns: [
    "/node_modules/(?!axios)/"  // Això transforma `axios` i altres biblioteques similars
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  }
  
}
