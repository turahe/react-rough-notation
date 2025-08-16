# Testing Guide

This document provides information about the testing setup and how to run tests for the React Rough Notation library.

## Test Setup

The project uses the following testing technologies:

- **Jest** - Test runner and assertion library
- **React Testing Library** - React component testing utilities
- **ts-jest** - TypeScript support for Jest
- **jsdom** - DOM environment for testing

## Running Tests

### Basic Test Commands

```bash
# Run all tests
npm test

# Run tests in watch mode (useful during development)
npm run test:watch

# Run tests with coverage report
npm run test:coverage

# Run tests in CI mode (no watch, with coverage)
npm run test:ci
```

### Test Coverage

The current test coverage is:
- **Overall**: 89.36%
- **Statements**: 89.36%
- **Branches**: 76.47%
- **Functions**: 82.6%
- **Lines**: 91.2%

## Test Structure

### Test Files

- `src/RoughNotation/__tests__/RoughNotation.test.tsx` - Tests for the main RoughNotation component
- `src/RoughNotationGroup/__tests__/RoughNotationGroup.test.tsx` - Tests for the RoughNotationGroup component
- `src/__tests__/integration.test.tsx` - Integration tests for both components working together

### Test Categories

#### Unit Tests
- Component rendering
- Prop handling
- Event callbacks
- Lifecycle methods
- State changes

#### Integration Tests
- Component interactions
- Group functionality
- Order handling
- Dynamic content changes

## Test Utilities

### Mocking

The tests use mocks for:
- `rough-notation` library (browser-only library)
- Timer functions for animation testing
- DOM APIs that aren't available in jsdom

### Test Helpers

- `render()` - Renders components for testing
- `screen` - Queries for elements in the rendered output
- `waitFor()` - Waits for asynchronous operations
- `jest.fn()` - Creates mock functions

## Writing New Tests

### Component Test Template

```tsx
import { render, screen } from '@testing-library/react';
import YourComponent from '../YourComponent';

describe('YourComponent', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    render(<YourComponent />);
    expect(screen.getByText('Expected text')).toBeInTheDocument();
  });

  it('handles props correctly', () => {
    render(<YourComponent prop="value" />);
    // Test prop handling
  });
});
```

### Testing Async Behavior

```tsx
it('handles async operations', async () => {
  render(<YourComponent />);
  
  await waitFor(() => {
    expect(screen.getByText('Async content')).toBeInTheDocument();
  });
});
```

### Testing User Interactions

```tsx
import userEvent from '@testing-library/user-event';

it('responds to user input', async () => {
  const user = userEvent.setup();
  render(<YourComponent />);
  
  const button = screen.getByRole('button');
  await user.click(button);
  
  // Assert expected behavior
});
```

## Best Practices

1. **Test Behavior, Not Implementation** - Focus on what the component does, not how it does it
2. **Use Semantic Queries** - Prefer `getByRole`, `getByLabelText` over `getByTestId`
3. **Test Edge Cases** - Include tests for error states, empty data, etc.
4. **Keep Tests Simple** - Each test should verify one specific behavior
5. **Use Descriptive Test Names** - Test names should clearly describe what is being tested

## Debugging Tests

### Common Issues

- **Timing Issues**: Use `waitFor()` for async operations
- **Mock Problems**: Ensure mocks are properly set up in `beforeEach`
- **Type Errors**: Check that test data matches component prop types

### Debug Commands

```bash
# Run specific test file
npm test -- RoughNotation.test.tsx

# Run tests with verbose output
npm test -- --verbose

# Run tests matching a pattern
npm test -- --testNamePattern="renders correctly"
```

## Continuous Integration

The test suite is configured to run in CI environments with:
- No watch mode
- Coverage reporting
- Fail-fast on errors
- Proper exit codes

This ensures that all tests pass before code can be merged.
