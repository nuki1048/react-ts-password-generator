import { Box, Button, Heading, List } from '@chakra-ui/react';
import { PasswordItem } from './PasswordItem';
import { useGlitch } from 'react-powerglitch';
import { t } from 'i18next';

interface PasswordHistoryProps {
  passwords: { password: string; generatedDate: string }[];
  onClear: () => void;
}

export const PasswordHistory: React.FC<PasswordHistoryProps> = ({
  passwords,
  onClear,
}) => {
  const glitch = useGlitch();

  return (
    <>
      <Box
        width='fit-content'
        display='flex'
        justifyContent='flex-start'
        gap='32px'
        alignItems='center'
        flexDirection='column'
      >
        <Heading
          textTransform='uppercase'
          color='#FAFAFA'
          size='sm'
          ref={glitch.ref}
        >
          {t('password_history')}
        </Heading>

        <List
          display='flex'
          flexDirection='column'
          gap='20px'
          width='390px'
          height='500px'
          overflowX='hidden'
          overflowY='auto'
        >
          {passwords.map(({ generatedDate, password }, index) => (
            <PasswordItem
              key={index}
              password={password}
              date={generatedDate}
            />
          ))}
        </List>
        {passwords.length > 0 && (
          <Button
            variant='ghost'
            color='yellow.100'
            _hover={{
              color: 'yellow.100',
              background: 'transparent',
              opacity: 0.8,
            }}
            onClick={onClear}
          >
            Clear history
          </Button>
        )}
      </Box>
    </>
  );
};
