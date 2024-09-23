import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import { PasswordInput } from '../PasswordInput';

describe('PasswordInput', () => {
  test('renders input correctly', () => {
    render(<PasswordInput passwordStrength={0} />);

    const inputElement = screen.getByRole('textbox');

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveStyle({
      border: '2px solid #00F0FF',
      color: '#00F0FF',
      background: 'rgba(0, 240, 255, 0.10)',
      padding: '20px 80px 20px 20px',
    });
  });

  test('renders password strength icon correctly', () => {
    render(<PasswordInput passwordStrength={3} />);

    const passwordStrengthIcon = screen.getByTestId('password-strength-icon');

    expect(passwordStrengthIcon).toBeInTheDocument();
  });

  test('type in input field', () => {
    render(<PasswordInput passwordStrength={0} />);

    const inputElement = screen.getByTestId('password-input');
    expect(inputElement).toBeInTheDocument();

    fireEvent.change(inputElement, { target: { value: 'password123' } });

    expect(inputElement).toHaveValue('password123');
  });

  test('calls onReset callback when reset button is clicked', () => {
    const onResetMock = jest.fn();
    render(<PasswordInput passwordStrength={0} onReset={onResetMock} />);

    const resetButton = screen.getByTestId('reset-button');
    expect(resetButton).toBeInTheDocument();

    fireEvent.click(resetButton);

    expect(onResetMock).toHaveBeenCalledTimes(1);
  });
});
