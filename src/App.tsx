import { Box, Heading } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Content } from './components/Content';
import { Footer } from './components/Footer';
import { useGlitch } from 'react-powerglitch';

function App() {
  const { t } = useTranslation('translation');
  const glitch = useGlitch();

  return (
    <Box
      width='100%'
      background='#000'
      height='100vh'
      paddingY={{ base: '40px', lg: 28 }}
      paddingX={{ base: '20px', lg: 32 }}
      overflowX='hidden'
    >
      <Heading
        color='yellow.100'
        textTransform='uppercase'
        whiteSpace='pre-line'
        ref={glitch.ref}
        data-testid='title'
      >
        {t('title').split(' ').join('\n')}
      </Heading>
      <Content />
      <Footer />
    </Box>
  );
}

export default App;
