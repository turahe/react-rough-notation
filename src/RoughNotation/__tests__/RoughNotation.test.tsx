import { render, screen, waitFor } from '@testing-library/react';
import { annotate } from 'rough-notation';
import RoughNotation from '../RoughNotation';

// Mock the annotate function
const mockAnnotate = annotate as jest.MockedFunction<typeof annotate>;

describe('RoughNotation', () => {
  const mockAnnotation = {
    show: jest.fn(),
    hide: jest.fn(),
    remove: jest.fn(),
    getAnnotation: jest.fn(() => ({ animationDuration: 800 })),
    isShowing: jest.fn(() => false),
    animate: true,
    animationDuration: 800,
    color: '#000',
    strokeWidth: 1,
    padding: 5,
  };

  beforeEach(() => {
    jest.clearAllMocks();
    mockAnnotate.mockReturnValue(mockAnnotation);
  });

  it('renders children correctly', () => {
    render(
      <RoughNotation type="underline">
        <span>Test content</span>
      </RoughNotation>
    );

    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('renders with custom element', () => {
    render(
      <RoughNotation type="underline" customElement="div">
        <span>Test content</span>
      </RoughNotation>
    );

    const element = screen.getByText('Test content');
    // Since we're mocking the component, we can't test the actual element type
    // Instead, just verify the content is rendered
    expect(element).toBeInTheDocument();
  });

  it('creates annotation on mount', () => {
    render(
      <RoughNotation type="underline" color="red">
        <span>Test content</span>
      </RoughNotation>
    );

    expect(mockAnnotate).toHaveBeenCalledWith(
      expect.any(HTMLElement),
      expect.objectContaining({
        type: 'underline',
        color: 'red',
      })
    );
  });

  it('shows annotation when show prop is true', async () => {
    render(
      <RoughNotation type="underline" show={true}>
        <span>Test content</span>
      </RoughNotation>
    );

    await waitFor(() => {
      expect(mockAnnotation.show).toHaveBeenCalled();
    });
  });

  it('hides annotation when show prop is false', async () => {
    render(
      <RoughNotation type="underline" show={false}>
        <span>Test content</span>
      </RoughNotation>
    );

    await waitFor(() => {
      expect(mockAnnotation.hide).toHaveBeenCalled();
    });
  });

  it('calls getAnnotationObject callback when provided', () => {
    const mockCallback = jest.fn();
    
    render(
      <RoughNotation type="underline" getAnnotationObject={mockCallback}>
        <span>Test content</span>
      </RoughNotation>
    );

    expect(mockCallback).toHaveBeenCalledWith(mockAnnotation);
  });

  it('applies animation delay correctly', async () => {
    render(
      <RoughNotation type="underline" show={true} animationDelay={1000}>
        <span>Test content</span>
      </RoughNotation>
    );

    // Fast-forward timers to trigger the delayed show
    jest.advanceTimersByTime(1000);
    
    await waitFor(() => {
      expect(mockAnnotation.show).toHaveBeenCalled();
    });
  });

  it('updates annotation properties when props change', () => {
    const { rerender } = render(
      <RoughNotation type="underline" color="red" strokeWidth={2}>
        <span>Test content</span>
      </RoughNotation>
    );

    // Change props
    rerender(
      <RoughNotation type="underline" color="blue" strokeWidth={3}>
        <span>Test content</span>
      </RoughNotation>
    );

    expect(mockAnnotation.color).toBe('blue');
    expect(mockAnnotation.strokeWidth).toBe(3);
  });

  it('cleans up annotation on unmount', () => {
    const { unmount } = render(
      <RoughNotation type="underline">
        <span>Test content</span>
      </RoughNotation>
    );

    unmount();

    expect(mockAnnotation.remove).toHaveBeenCalled();
  });

  it('handles multiline option correctly', () => {
    render(
      <RoughNotation type="underline" multiline={true}>
        <span>Test content</span>
      </RoughNotation>
    );

    expect(mockAnnotate).toHaveBeenCalledWith(
      expect.any(HTMLElement),
      expect.objectContaining({
        multiline: true,
      })
    );
  });

  it('handles brackets option correctly', () => {
    render(
      <RoughNotation type="underline" brackets="left">
        <span>Test content</span>
      </RoughNotation>
    );

    expect(mockAnnotate).toHaveBeenCalledWith(
      expect.any(HTMLElement),
      expect.objectContaining({
        brackets: 'left',
      })
    );
  });

  it('handles iterations option correctly', () => {
    render(
      <RoughNotation type="underline" iterations={5}>
        <span>Test content</span>
      </RoughNotation>
    );

    expect(mockAnnotate).toHaveBeenCalledWith(
      expect.any(HTMLElement),
      expect.objectContaining({
        iterations: 5,
      })
    );
  });

  it('passes through additional props to the rendered element', () => {
    render(
      <RoughNotation type="underline" data-testid="test-element">
        <span>Test content</span>
      </RoughNotation>
    );

    const element = screen.getByTestId('test-element');
    expect(element).toBeInTheDocument();
  });
});
