import '@testing-library/jest-dom';

import { render, screen, fireEvent } from '@testing-library/react';
import { PasswordItem } from '../PasswordItem';
Object.defineProperty(global.navigator, 'clipboard', {
  value: {
    writeText: jest.fn(),
  },
  writable: true,
  configurable: true,
});

describe('PasswordItem', () => {
  test('renders password and date correctly', () => {
    const password = 'myPassword';
    const date = '2022-01-01';

    render(<PasswordItem password={password} date={date} />);

    const passwordElement = screen.getByText(password);
    const dateElement = screen.getByText(date);

    expect(passwordElement).toBeInTheDocument();
    expect(dateElement).toBeInTheDocument();
  });

  test('copies password to clipboard when copy button is clicked', () => {
    const password = 'myPassword';
    const date = '2022-01-01';

    render(<PasswordItem password={password} date={date} />);

    const copyButton = screen.getByLabelText('Copy password');

    fireEvent.click(copyButton);
  });
});
