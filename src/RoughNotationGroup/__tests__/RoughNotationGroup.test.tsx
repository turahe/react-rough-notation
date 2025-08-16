import { render, screen } from '@testing-library/react';
import RoughNotationGroup from '../RoughNotationGroup';

describe('RoughNotationGroup', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders children correctly', () => {
    render(
      <RoughNotationGroup>
        <div>Child 1</div>
        <div>Child 2</div>
      </RoughNotationGroup>
    );

    expect(screen.getByText('Child 1')).toBeInTheDocument();
    expect(screen.getByText('Child 2')).toBeInTheDocument();
  });

  it('handles empty children', () => {
    expect(() => {
      render(<RoughNotationGroup show={true}><></></RoughNotationGroup>);
    }).not.toThrow();
  });

  it('handles single child', () => {
    render(
      <RoughNotationGroup show={true}>
        <div>Single child</div>
      </RoughNotationGroup>
    );

    expect(screen.getByText('Single child')).toBeInTheDocument();
  });

  it('handles multiple children', () => {
    render(
      <RoughNotationGroup show={true}>
        <div>Child 1</div>
        <div>Child 2</div>
        <div>Child 3</div>
      </RoughNotationGroup>
    );

    expect(screen.getByText('Child 1')).toBeInTheDocument();
    expect(screen.getByText('Child 2')).toBeInTheDocument();
    expect(screen.getByText('Child 3')).toBeInTheDocument();
  });

  it('renders with show prop true', () => {
    render(
      <RoughNotationGroup show={true}>
        <div>Test child</div>
      </RoughNotationGroup>
    );

    expect(screen.getByText('Test child')).toBeInTheDocument();
  });

  it('renders with show prop false', () => {
    render(
      <RoughNotationGroup show={false}>
        <div>Test child</div>
      </RoughNotationGroup>
    );

    expect(screen.getByText('Test child')).toBeInTheDocument();
  });
});
