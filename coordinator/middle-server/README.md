# Middle Server Test Configuration

## Overview
This section provides detailed documentation for testing the middle server, covering various testing approaches, configurations, and best practices.

## Test Framework
- **Primary Framework**: Jest
- **Language**: TypeScript
- **Test Types**:
  - Unit Tests
  - Integration Tests
  - Live API Tests

## Test Configuration
### Jest Configuration (`jest.config.js`)
```javascript
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src/tests'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
}
```

## Test Environment Setup

### Environment Variables
Create a `.env.test` file with the following configuration:
```bash
# MongoDB Test Database
MONGODB_URI=mongodb://localhost:27017/middle-server-test

# Authentication
TEST_ADMIN_KEY=your_test_admin_key
TEST_API_KEY=your_test_api_key

# Logging and Debugging
LOG_LEVEL=debug
```

## Running Tests

### Standard Test Suite
```bash
# Run all tests
npm test

# Run specific test file
npm test -- src/tests/swarm.test.ts

# Watch mode
npm test -- --watch
```

### Live Unit Tests
Live tests exercise APIs against a running server instance:
```bash
# Start server in dev mode
npm run dev

# In another terminal, run live tests
npx ts-node live_unit_tests/controllers/createToDoTest.ts
```

## Test Coverage
```bash
# Generate coverage report
npm run test:coverage
```

## Test Types and Locations

### Unit Tests (`src/tests/`)
- Isolated component testing
- Mock external dependencies
- Focus on individual function/method behavior

### Live Unit Tests (`live_unit_tests/`)
- Real HTTP request testing
- Validate end-to-end API functionality
- Not part of automated test suite

### Deprecated Unit Tests (`deprecated_unit_tests/`)
- Legacy test scripts
- Demonstrate API usage before recent refactoring
- Kept for migration reference

## Writing Effective Tests

### Best Practices
1. Test one behavior per test case
2. Use descriptive test names
3. Cover both positive and negative scenarios
4. Mock external services
5. Ensure tests are independent and repeatable

### Example Test Structure
```typescript
describe('Swarm Job API', () => {
  beforeEach(() => {
    // Setup test environment
  });

  it('should create a swarm job successfully', async () => {
    // Implementation
  });

  it('should handle invalid job specifications', async () => {
    // Error handling test
  });
});
```

## Debugging and Troubleshooting
- Use `DEBUG` environment variable for verbose logging
- Leverage Jest's `--verbose` flag
- Check network connectivity
- Verify MongoDB connection
- Review test configuration

## Continuous Integration
- Automatic test runs on:
  - Pull request creation
  - Merge to main branch
  - Scheduled nightly builds

## Performance Testing
- Use `npm run test:performance` for benchmarking
- Monitor response times
- Track resource utilization

## Security Testing
- Validate authentication mechanisms
- Test input validation
- Check error handling for potential vulnerabilities

## Migration and Compatibility
- Deprecated tests provide migration path documentation
- Gradual transition between test approaches

## Contributing
1. Write clear, focused tests
2. Update documentation
3. Maintain test coverage
4. Follow existing patterns