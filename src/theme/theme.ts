import { extendTheme } from '@chakra-ui/react';
import '@fontsource/tomorrow';

const theme = extendTheme({
  fonts: {
    heading: `'Tomorrow', sans-serif;`,
    body: `'Tomorrow', sans-serif;`,
  },
  colors: {
    yellow: {
      '100': '#F8EF00',
    },
  },
  components: {
    Button: {
      variants: {
        primary: {
          width: '360px',
          height: '64px',
          borderRadius: 0,
          padding: '20px 40px',
          gap: '54px',
          clipPath:
            'polygon(50% 0%, 100% 0, 100% 100%, 75% 100%, 6% 100%, 0% 60%, 0 0)',
          backgroundColor: 'yellow.100',
          textTransform: 'uppercase',
          position: 'relative',
          _before: {
            content: "''",
            position: 'absolute',
            display: 'block',
            right: '0',
            width: '2px',
            height: '100%',
            background: '#FF003C',
          },
          _after: {
            content: "'R25'",
            position: 'absolute',
            display: 'block',
            right: '20px',
            bottom: '0',
            width: '38px',
            height: '8px',
            fontSize: '8px',
            background: 'linear-gradient(to right, red 2%, #000 2%)',
            color: 'yellow.100',
          },
          _hover: {
            backgroundColor: 'yellow.100',
            opacity: 0.8,
          },
        },
      },
    },
  },
});

export default theme;
