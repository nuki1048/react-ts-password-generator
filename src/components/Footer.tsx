import { Box, Link } from '@chakra-ui/react';
import { MusicPlayer } from './MusicPlayer';
export const Footer: React.FC = () => {
  return (
    <Box
      width='100%'
      marginTop='180px'
      display='flex'
      alignItems='center'
      gap='16px'
    >
      <MusicPlayer />

      <Box
        width='2px'
        height='24px'
        background='linear-gradient(270deg, rgba(250, 250, 250, 0.00) -2.08%, #FAFAFA 47.15%, rgba(250, 250, 250, 0.00) 100%);'
      />

      <Link textTransform='uppercase' color='#FAFAFA' fontSize='12px'>
        Keyboard Shortcuts
      </Link>
      <Link textTransform='uppercase' color='#FAFAFA' fontSize='12px'>
        Source Code
      </Link>
      <Link textTransform='uppercase' color='#FAFAFA' fontSize='12px'>
        Author
      </Link>
    </Box>
  );
};
