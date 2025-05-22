# Orca Agent Test Configuration

## Overview
This document provides comprehensive test documentation and configuration guidelines for the Orca Agent, covering various testing approaches and best practices.

## Test Framework
- **Primary Framework**: pytest
- **Language**: Python
- **Test Types**:
  - Unit Tests
  - Integration Tests
  - End-to-End (E2E) Tests

## Test Configuration

### Pytest Configuration
Create a `pytest.ini` or `pyproject.toml` with configuration:
```ini
[tool:pytest]
testpaths = tests
python_files = test_*.py
python_classes = *Test
python_functions = test_*
addopts = -v --doctest-modules --junitxml=junit/test-results.xml
```

### Environment Variables
Create a `.env.test` file:
```bash
# API Configuration
ORCA_API_URL=http://localhost:8000
ORCA_API_KEY=your_test_api_key

# Logging
LOG_LEVEL=DEBUG
```

## Running Tests

### Standard Test Suite
```bash
# Run all tests
pytest

# Run specific module
pytest tests/test_db_operations.py

# Run with coverage
pytest --cov=src tests/

# Generate HTML coverage report
pytest --cov=src --cov-report=html
```

## Test Structure

### Directory Layout
```
node/orca-agent/
├── tests/
│   ├── __init__.py
│   ├── conftest.py          # Shared fixtures
│   ├── test_db_operations.py
│   ├── test_logging.py
│   ├── test_models.py
│   └── stages/               # E2E test stages
│       ├── worker_audit.py
│       ├── worker_check.py
│       └── ...
```

### Writing Tests
```python
def test_database_connection():
    """Test database connection establishment."""
    connection = establish_db_connection()
    assert connection is not None, "Failed to establish database connection"

def test_invalid_api_key():
    """Test API authentication failure."""
    with pytest.raises(AuthenticationError):
        perform_api_request(invalid_key)
```

## Mocking and Fixtures
Use `pytest.fixture` for setup and teardown:
```python
@pytest.fixture
def mock_github_service():
    """Mock GitHub service for testing."""
    with patch('src.services.github_service.GitHubService') as mock:
        yield mock

def test_github_integration(mock_github_service):
    mock_github_service.return_value.get_repo.return_value = MockRepo()
```

## Continuous Integration
- Automatic test runs on:
  - Pull request creation
  - Merge to main branch
  - Scheduled nightly builds

## Performance and Load Testing
```bash
# Run performance tests
pytest tests/performance/
```

## Debugging
- Use `-vv` for verbose output
- Leverage `logging` module
- Use `pytest.set_trace()` for interactive debugging

## Best Practices
1. Keep tests independent
2. Test one behavior per test
3. Use meaningful test names
4. Cover edge cases
5. Mock external dependencies

## Security Testing
- Test authentication mechanisms
- Validate input sanitization
- Check for potential vulnerabilities

## Troubleshooting
- Ensure all dependencies are installed
- Check network connectivity
- Verify environment variable configuration

## Contributing
1. Write clear, focused tests
2. Maintain high test coverage
3. Update documentation
4. Follow existing testing patterns