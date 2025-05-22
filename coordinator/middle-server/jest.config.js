/**
 * Jest Configuration for Coordinator Middle Server Testing
 * 
 * This comprehensive configuration provides robust testing capabilities
 * with a focus on code quality, performance, and reliability.
 */
module.exports = {
  // Test Environment Setup
  // ---------------------
  // TypeScript preset for seamless transpilation
  preset: 'ts-jest', // Enables TypeScript support with minimal configuration
  
  // Specifies the test runtime context
  testEnvironment: 'node', // Ensures tests run in a Node.js environment
  
  // Test Discovery Configuration
  // ---------------------------
  // Root directories for test file discovery
  roots: ['<rootDir>/src/tests'], // Searches for tests in the specified directory
  
  // File Transformation Rules
  transform: {
    // TypeScript compilation for test files
    '^.+\\.tsx?$': [
      'ts-jest', 
      {
        // TypeScript compiler options
        tsconfig: '<rootDir>/tsconfig.json', // Use project-specific TypeScript config
        diagnostics: {
          // Type-checking configuration
          warnOnly: true, // Prevents test failures for minor type discrepancies
        }
      }
    ]
  },
  
  // Test File Identification
  // ----------------------
  // Regex pattern to identify test files
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$', // Matches test file patterns
  
  // Supported Module Extensions
  moduleFileExtensions: [
    'ts',    // TypeScript source files
    'tsx',   // TypeScript React files
    'js',    // JavaScript files
    'jsx',   // React JavaScript files
    'json',  // JSON configuration files
    'node'   // Node.js modules
  ],
  
  // Coverage Reporting
  // -----------------
  collectCoverage: true, // Enable comprehensive coverage tracking
  coverageDirectory: '<rootDir>/coverage', // Output directory for coverage reports
  coverageReporters: [
    'text',      // Console output
    'lcov',      // Detailed HTML report
    'clover'     // XML format for CI integration
  ],
  coverageThreshold: {
    // Minimum acceptable coverage levels
    global: {
      branches: 60,    // Minimum branch coverage percentage
      functions: 60,   // Minimum function coverage percentage
      lines: 60,       // Minimum line coverage percentage
      statements: 60   // Minimum statement coverage percentage
    }
  },
  
  // Performance Optimization
  // ----------------------
  maxWorkers: '50%', // Utilize half of available CPU cores for test execution
  
  // Mocking and Test Isolation
  // -------------------------
  clearMocks: true,   // Clear mock calls between tests
  resetMocks: true,   // Reset mock internal state
  restoreMocks: true, // Restore original implementation after each test
  
  // Debugging Configuration
  // ----------------------
  verbose: true, // Provide detailed test execution information
  
  // Module Resolution
  // -----------------
  moduleNameMapper: {
    // Map complex import paths or create aliases
    '^@middle-server/(.*)$': '<rootDir>/src/$1',
    '^@services/(.*)$': '<rootDir>/src/services/$1'
  },
  
  // Global Test Setup
  // ----------------
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.js' // Optional global test initialization
  ],
  
  // Database and External Service Mocking
  // ------------------------------------
  setupFiles: [
    '<rootDir>/test-setup/mock-database.js',   // Mock database connections
    '<rootDir>/test-setup/mock-external-services.js' // Mock external API calls
  ]
};

/**
 * Testing Best Practices and Recommendations:
 * 
 * 1. Maintain Test Independence
 *    - Each test should be isolated and not depend on other tests
 *    - Use beforeEach() and afterEach() for setup and cleanup
 * 
 * 2. Focus on Meaningful Coverage
 *    - Prioritize critical path and complex logic testing
 *    - Don't aim for 100% coverage at the expense of test quality
 * 
 * 3. Efficient Mocking Strategies
 *    - Mock external dependencies and complex modules
 *    - Use lightweight, focused mocks
 * 
 * 4. Performance Considerations
 *    - Minimize test execution time
 *    - Use parallel test execution
 *    - Avoid unnecessary setup and teardown
 * 
 * 5. Continuous Improvement
 *    - Regularly review and update test configurations
 *    - Adapt testing strategy to project evolution
 */