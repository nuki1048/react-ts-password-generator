import { Button } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { t } from 'i18next';
import { WarningTwoIcon } from '@chakra-ui/icons';

export const MusicPlayer = () => {
  const [enableMusic, setEnableMusic] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const onClickButton = () => {
    if (!enableMusic) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
    setEnableMusic(!enableMusic);
  };

  return (
    <>
      <audio
        ref={audioRef}
        hidden
        data-play={enableMusic}
        loop
        data-testid='audio-element'
      >
        <source src='/sounds/1-02 Extraction Action.mp3' type='audio/mpeg' />
      </audio>

      <Button
        variant='ghost'
        _hover={{ background: 'transparent', opacity: 0.8 }}
        leftIcon={<WarningTwoIcon />}
        color='#00F0FF'
        onClick={onClickButton}
      >
        {enableMusic ? t('disable_audio') : t('enable_audio')}
      </Button>
    </>
  );
};
