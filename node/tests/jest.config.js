/**
 * Jest Configuration for Swarms Node Testing
 * 
 * This configuration provides a comprehensive setup for TypeScript-based testing
 * with detailed options to optimize test performance, coverage, and reliability.
 */
module.exports = {
  // Test Environment Configuration
  // -------------------------------
  // Preset enables TypeScript support with minimal configuration overhead
  preset: 'ts-jest', // Transforms TypeScript files for Jest
  
  // Specifies the test runtime environment
  testEnvironment: 'node', // Ensures tests run in Node.js context
  
  // Test Discovery and Execution
  // ----------------------------
  // Root directories for test file discovery
  roots: ['<rootDir>'], // Searches for tests in the current directory
  
  // File transformation rules
  transform: {
    // Use ts-jest to compile TypeScript files
    '^.+\\.tsx?$': [
      'ts-jest', 
      {
        // Compiler options for test transpilation
        tsconfig: '<rootDir>/tsconfig.json', // Use project's TypeScript config
        diagnostics: {
          // Provides more detailed type-checking during tests
          warnOnly: true, // Prevents test failures for minor type issues
        }
      }
    ]
  },
  
  // Test File Identification
  // -----------------------
  // Regex to identify test files
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$', // Matches test files
  
  // Supported Module Extensions
  moduleFileExtensions: [
    'ts',    // TypeScript source files
    'tsx',   // TypeScript React files
    'js',    // JavaScript files
    'jsx',   // React JavaScript files
    'json',  // JSON files
    'node'   // Node.js modules
  ],
  
  // Coverage Configuration
  // ---------------------
  collectCoverage: true, // Enable coverage collection
  coverageDirectory: '<rootDir>/coverage', // Output directory for coverage reports
  coverageReporters: [
    'text',      // Console output
    'lcov',      // Detailed HTML report
    'clover'     // XML format for CI tools
  ],
  coverageThreshold: {
    // Minimum coverage requirements
    global: {
      branches: 50,    // Minimum branch coverage
      functions: 50,   // Minimum function coverage
      lines: 50,       // Minimum line coverage
      statements: 50   // Minimum statement coverage
    }
  },
  
  // Performance and Parallelization
  // -------------------------------
  maxWorkers: '50%', // Use half of available CPU cores
  
  // Mocking Configuration
  // --------------------
  clearMocks: true,   // Reset mocks between tests
  resetMocks: true,   // Automatically reset mock state
  restoreMocks: true, // Restore original implementation after each test
  
  // Debugging and Verbose Output
  // ----------------------------
  verbose: true, // Detailed output for each test
  
  // Module Name Mapping (for complex import scenarios)
  moduleNameMapper: {
    // Example: map complex imports or alias paths
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  
  // Setup and Teardown Files
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.js' // Optional global test setup
  ]
};

/**
 * Best Practices and Performance Tips:
 * 1. Keep tests focused and independent
 * 2. Use mocking to isolate components
 * 3. Aim for high, meaningful coverage
 * 4. Optimize test performance with parallelization
 * 5. Regularly review and update test configuration
 */