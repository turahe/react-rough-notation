import '@testing-library/jest-dom';

// Mock rough-notation since it's a browser-only library
jest.mock('rough-notation', () => ({
  annotate: jest.fn(() => ({
    show: jest.fn(),
    hide: jest.fn(),
    remove: jest.fn(),
    getAnnotation: jest.fn(() => ({ animationDuration: 800 })),
    animate: true,
    animationDuration: 800,
    color: '#000',
    strokeWidth: 1,
    padding: 5,
  })),
}));

// Mock window.setTimeout and clearTimeout for better test control
const originalSetTimeout = global.setTimeout;
const originalClearTimeout = global.clearTimeout;

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

// Global test utilities
global.setTimeout = originalSetTimeout;
global.clearTimeout = originalClearTimeout;
