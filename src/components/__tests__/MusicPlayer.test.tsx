import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { MusicPlayer } from '../MusicPlayer';

describe('MusicPlayer', () => {
  test('plays audio when button is clicked', () => {
    render(<MusicPlayer />);
    const playButton = screen.getByRole('button');
    const audioElement = screen.getByTestId(
      'audio-element'
    ) as HTMLAudioElement; // Assert the type to HTMLAudioElement

    fireEvent.click(playButton);
    expect(audioElement).toHaveAttribute('data-play', 'true');

    fireEvent.click(playButton);
    expect(audioElement).toHaveAttribute('data-play', 'false');
    expect(audioElement.paused).toBeTruthy();
  });
});
