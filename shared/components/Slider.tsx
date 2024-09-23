import {
  Box,
  Slider,
  SliderFilledTrack,
  SliderProps,
  SliderThumb,
  SliderTrack,
} from '@chakra-ui/react';
import { useState } from 'react';

export const NumberSlider: React.FC<SliderProps> = ({
  onChange,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  value: valueFromProps,
  ...props
}) => {
  const [fallbackValue, setFallbackValue] = useState(10);

  const onChangeFallback = (value: number) => {
    setFallbackValue(value);
  };
  return (
    <Box width={{ base: '390px', lg: '588px' }}>
      <Slider
        marginTop='64px'
        width={{ base: '390px', lg: '588px' }}
        aria-label='slider-ex-4'
        onChangeEnd={onChange}
        onChange={(v) => onChangeFallback(v)}
        value={fallbackValue}
        inputProps={{ 'data-testid': 'content-input' }}
        {...props}
      >
        <SliderTrack bg='#00F0FF'>
          <SliderFilledTrack bg='#00F0FF' />
        </SliderTrack>
        <SliderThumb
          boxSize={6}
          borderRadius={0}
          background='#F8EF00'
          position='relative'
        >
          {/* <Box color='tomato' as={MdGraphicEq} /> */}
          <Box color='#fff' position='absolute' top={'-35px'}>
            {fallbackValue}
          </Box>
        </SliderThumb>
      </Slider>
    </Box>
  );
};
