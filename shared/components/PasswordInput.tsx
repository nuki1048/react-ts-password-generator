import { RepeatIcon } from '@chakra-ui/icons';
import {
  IconButton,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
} from '@chakra-ui/react';

import { PasswordStrengthIcon } from '../../src/components/PasswordStrengthIcon';

interface PasswordInputProps extends InputProps {
  passwordStrength: number;
  onReset?: () => void;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({
  passwordStrength,
  onReset,
  ...props
}) => {
  return (
    <InputGroup width={{ base: '390px', lg: '588px' }}>
      <Input
        {...props}
        border={'2px solid #00F0FF'}
        borderRadius={0}
        padding='20px'
        color='#00F0FF'
        fontSize='16px'
        background='rgba(0, 240, 255, 0.10)'
        paddingRight='80px'
        data-testid='password-input'
      />
      <InputRightElement marginRight='20px' gap='5px'>
        <PasswordStrengthIcon number={passwordStrength} />
        <IconButton
          data-testid='reset-button'
          onClick={onReset}
          aria-label='Show password'
          background='transparent'
          _hover={{ background: 'transparent', opacity: 0.8 }}
          icon={<RepeatIcon color='#00F0FF' width='24px' height='24px' />}
        />
      </InputRightElement>
    </InputGroup>
  );
};
