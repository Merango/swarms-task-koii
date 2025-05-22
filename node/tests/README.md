# Node Test Suite Documentation

## Overview
This directory contains comprehensive test suites for the Swarms Node implementation, covering various components and workflows.

## Test Framework
- **Primary Framework**: Jest (for TypeScript tests)
- **E2E Testing**: Custom Python-based test runner
- **Test Types**: 
  - Unit Tests
  - Integration Tests
  - End-to-End (E2E) Tests

## Configuration

### Jest Configuration
- Configuration file: `jest.config.js`
- Key settings:
  ```javascript
  module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['<rootDir>/tests'],
    transform: {
      '^.+\\.tsx?$': 'ts-jest'
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
  }
  ```

### Environment Variables
Create a `.env` file with the following keys:
```bash
# API Configuration
SWARMS_API_URL=http://localhost:8080
SWARMS_API_KEY=your_test_api_key

# Middle Server Configuration
MIDDLE_SERVER_URL=http://localhost:3000
SWARMS_ADMIN_KEY=your_admin_test_key

# Optional Debugging
DEBUG=swarms:test*
```

## Running Tests

### TypeScript/Jest Tests
```bash
# Run all tests
npm test

# Run specific test file
npm test -- tests/main.test.ts

# Watch mode (development)
npm test -- --watch
```

### Python E2E Tests
```bash
# Run all E2E tests
python -m tests.e2e

# Reset databases before running
python -m tests.e2e --reset
```

## Test Coverage
```bash
# Generate coverage report
npm run test:coverage
```

## Writing Tests

### Best Practices
1. Use descriptive test names
2. Test one behavior per test
3. Use setup and teardown methods
4. Mock external dependencies
5. Test both positive and negative scenarios

### Example Test Structure
```typescript
describe('API Endpoint Tests', () => {
  beforeEach(() => {
    // Setup test environment
  });

  afterEach(() => {
    // Cleanup resources
  });

  it('should create a swarm job successfully', async () => {
    // Test implementation
  });

  it('should handle authentication errors', async () => {
    // Error handling test
  });
});
```

## Debugging
- Use `DEBUG` environment variable for verbose logging
- Leverage Jest's `--verbose` flag
- Use source map support for better error tracing

## Continuous Integration
Tests are automatically run on:
- Pull request creation
- Merge to main branch
- Scheduled nightly builds

## Troubleshooting
- Ensure all dependencies are installed (`npm install`)
- Check environment variable configuration
- Verify network connectivity for external services
- Review test logs for specific error details