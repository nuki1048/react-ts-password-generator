import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { StyledCheckbox } from '../Checkbox';

describe('StyledCheckbox', () => {
  test('renders children correctly', () => {
    const children = 'Checkbox Label';

    render(<StyledCheckbox>{children}</StyledCheckbox>);

    const checkboxLabel = screen.getByText(children);

    expect(checkboxLabel).toBeInTheDocument();
  });

  test('applies custom styles correctly', () => {
    const children = 'Checkbox Label';

    render(<StyledCheckbox>{children}</StyledCheckbox>);

    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).toHaveStyle({
      border: '0px',
      width: '1px',
    });
  });
});
