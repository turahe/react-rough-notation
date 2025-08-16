import { render, screen, waitFor } from '@testing-library/react';
import RoughNotation from '../RoughNotation/RoughNotation';
import RoughNotationGroup from '../RoughNotationGroup/RoughNotationGroup';

describe('RoughNotation Integration Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders multiple RoughNotation components within a group', () => {
    render(
      <RoughNotationGroup show={true}>
        <RoughNotation type="underline" color="red">
          <span>First annotation</span>
        </RoughNotation>
        <RoughNotation type="box" color="blue">
          <span>Second annotation</span>
        </RoughNotation>
        <RoughNotation type="circle" color="green">
          <span>Third annotation</span>
        </RoughNotation>
      </RoughNotationGroup>
    );

    expect(screen.getByText('First annotation')).toBeInTheDocument();
    expect(screen.getByText('Second annotation')).toBeInTheDocument();
    expect(screen.getByText('Third annotation')).toBeInTheDocument();
  });

  it('handles group show/hide state changes', async () => {
    const { rerender } = render(
      <RoughNotationGroup show={false}>
        <RoughNotation type="underline">
          <span>Test annotation</span>
        </RoughNotation>
      </RoughNotationGroup>
    );

    // Change to show
    rerender(
      <RoughNotationGroup show={true}>
        <RoughNotation type="underline">
          <span>Test annotation</span>
        </RoughNotation>
      </RoughNotationGroup>
    );

    await waitFor(() => {
      expect(screen.getByText('Test annotation')).toBeInTheDocument();
    });
  });

  it('handles ordered annotations correctly', () => {
    render(
      <RoughNotationGroup show={true}>
        <RoughNotation type="underline" order={2}>
          <span>Second</span>
        </RoughNotation>
        <RoughNotation type="box" order={1}>
          <span>First</span>
        </RoughNotation>
        <RoughNotation type="circle" order={3}>
          <span>Third</span>
        </RoughNotation>
      </RoughNotationGroup>
    );

    expect(screen.getByText('First')).toBeInTheDocument();
    expect(screen.getByText('Second')).toBeInTheDocument();
    expect(screen.getByText('Third')).toBeInTheDocument();
  });

  it('handles mixed ordered and unordered annotations', () => {
    render(
      <RoughNotationGroup show={true}>
        <RoughNotation type="underline" order={2}>
          <span>Second</span>
        </RoughNotation>
        <RoughNotation type="box">
          <span>Unordered</span>
        </RoughNotation>
        <RoughNotation type="circle" order={1}>
          <span>First</span>
        </RoughNotation>
      </RoughNotationGroup>
    );

    expect(screen.getByText('First')).toBeInTheDocument();
    expect(screen.getByText('Second')).toBeInTheDocument();
    expect(screen.getByText('Unordered')).toBeInTheDocument();
  });

  it('handles dynamic content changes', async () => {
    const { rerender } = render(
      <RoughNotationGroup show={true}>
        <RoughNotation type="underline">
          <span>Initial content</span>
        </RoughNotation>
      </RoughNotationGroup>
    );

    // Change content
    rerender(
      <RoughNotationGroup show={true}>
        <RoughNotation type="underline">
          <span>Updated content</span>
        </RoughNotation>
      </RoughNotationGroup>
    );

    await waitFor(() => {
      expect(screen.getByText('Updated content')).toBeInTheDocument();
    });
  });

  it('handles different annotation types within a group', () => {
    render(
      <RoughNotationGroup show={true}>
        <RoughNotation type="underline" color="red">
          <span>Underlined text</span>
        </RoughNotation>
        <RoughNotation type="box" color="blue" strokeWidth={2}>
          <span>Boxed text</span>
        </RoughNotation>
        <RoughNotation type="circle" color="green" padding={10}>
          <span>Circled text</span>
        </RoughNotation>
        <RoughNotation type="highlight" color="yellow">
          <span>Highlighted text</span>
        </RoughNotation>
      </RoughNotationGroup>
    );

    expect(screen.getByText('Underlined text')).toBeInTheDocument();
    expect(screen.getByText('Boxed text')).toBeInTheDocument();
    expect(screen.getByText('Circled text')).toBeInTheDocument();
    expect(screen.getByText('Highlighted text')).toBeInTheDocument();
  });

  it('handles nested components correctly', () => {
    render(
      <RoughNotationGroup show={true}>
        <div>
          <RoughNotation type="underline">
            <span>Nested annotation</span>
          </RoughNotation>
        </div>
        <RoughNotation type="box">
          <span>Direct annotation</span>
        </RoughNotation>
      </RoughNotationGroup>
    );

    expect(screen.getByText('Nested annotation')).toBeInTheDocument();
    expect(screen.getByText('Direct annotation')).toBeInTheDocument();
  });

  it('handles empty group gracefully', () => {
    expect(() => {
      render(<RoughNotationGroup show={true}><></></RoughNotationGroup>);
    }).not.toThrow();
  });

  it('handles group with single annotation', () => {
    render(
      <RoughNotationGroup show={true}>
        <RoughNotation type="underline">
          <span>Single annotation</span>
        </RoughNotation>
      </RoughNotationGroup>
    );

    expect(screen.getByText('Single annotation')).toBeInTheDocument();
  });
});
