import { Box } from '@chakra-ui/react';
import { PasswordHistory } from './PasswordHistory';
import { PasswordForm } from './PasswordForm';
import { usePasswordsStore } from '../store/usePasswordsStore';

export const Content: React.FC = () => {
  const passwords = usePasswordsStore((state) => state.passwords);
  const clearHistory = usePasswordsStore((state) => state.clearHistory);
  return (
    <Box
      width='100%'
      marginTop='64px'
      display='flex'
      gap='140px'
      flexDirection={{ base: 'column', lg: 'row' }}
    >
      <PasswordForm />
      <PasswordHistory passwords={passwords} onClear={clearHistory} />
    </Box>
  );
};
