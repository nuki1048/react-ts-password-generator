import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import { NumberSlider } from '../Slider';
global.ResizeObserver = class ResizeObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};
describe('NumberSlider', () => {
  test('renders slider correctly', () => {
    render(<NumberSlider value={50} onChange={() => {}} />);

    const sliderElement = screen.getByLabelText('slider-ex-4');

    expect(sliderElement).toBeInTheDocument();
    expect(sliderElement).toHaveValue(50);
  });

  test('calls onChange callback when slider value changes', () => {
    const onChangeMock = jest.fn();
    const { container } = render(
      <NumberSlider value={50} onChange={onChangeMock} />
    );

    const sliderElement = screen.getByLabelText('slider-ex-4');
    expect(sliderElement).toBeInTheDocument();

    const contentInput = container.querySelector('input');
    if (contentInput) {
      fireEvent.change(contentInput, {
        target: { value: 75 },
      });
    }

    expect(contentInput).toHaveValue('75');
  });
});
