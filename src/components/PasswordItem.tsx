import { CopyIcon } from '@chakra-ui/icons';
import { Box, IconButton, Text, useToast } from '@chakra-ui/react';
import { t } from 'i18next';

export const PasswordItem: React.FC<{
  password: string;
  date: string;
}> = ({ date, password }) => {
  const toast = useToast();
  const onClickCopy = () => {
    navigator.clipboard.writeText(password);

    toast({
      title: t('password_copy'),
      status: 'info',
      duration: 2000,
      isClosable: true,
    });
  };
  return (
    <Box
      width='390px'
      display='flex'
      justifyContent='space-between'
      paddingRight='12px'
    >
      <Box opacity='0.8'>
        <Text
          fontSize='16px'
          color='#FAFAFA'
          whiteSpace='nowrap'
          textOverflow='ellipsis'
          overflow='hidden'
          width='260px'
        >
          {password}
        </Text>
        <Text
          color='#BBB'
          fontSize='12px'
          textOverflow='ellipsis'
          whiteSpace='nowrap'
          overflow='hidden'
          width='170px'
        >
          {date}
        </Text>
      </Box>
      <IconButton
        onClick={onClickCopy}
        background='transparent'
        _hover={{ background: 'transparent', opacity: 0.8 }}
        aria-label='Copy password'
        icon={<CopyIcon width='24px' height='24px' color='#FAFAFA' />}
      />
    </Box>
  );
};
