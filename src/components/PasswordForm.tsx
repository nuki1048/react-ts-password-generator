import { Box, Button, Grid, Icon, useToast } from '@chakra-ui/react';
import { PasswordInput } from '../../shared/components/PasswordInput';
import { NumberSlider } from '../../shared/components/Slider';
import { StyledCheckbox } from '../../shared/components/Checkbox';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { t } from 'i18next';
import { useEffect, useMemo, useState } from 'react';
import { passwordStrength } from 'check-password-strength';
import { generatePassword } from '../utils/passwordUtils';
import { usePasswordsStore } from '../store/usePasswordsStore';

export const PasswordForm = () => {
  const toast = useToast();
  const [password, setPassword] = useState('');
  const [passwordStrengthNumber, setPasswordStrengthNumber] = useState(10);
  const [uppercaseLetters, setUppercaseLetters] = useState(true);
  const [lowercaseLetters, setLowercaseLetters] = useState(true);
  const [symbols, setSymbols] = useState(true);
  const [numbers, setNumbers] = useState(false);
  const [passwordLength, setPasswordLength] = useState(0);
  const addNewPassword = usePasswordsStore((state) => state.addNewPassword);

  const generatedPassword = useMemo(() => {
    const password = generatePassword({
      length: passwordLength,
      uppercase: uppercaseLetters,
      lowercase: lowercaseLetters,
      numbers: numbers,
      symbols: symbols,
    });

    return password;
  }, [passwordLength, uppercaseLetters, lowercaseLetters, symbols, numbers]);

  useEffect(() => {
    if (!generatedPassword) return;
    setPasswordStrengthNumber(() => passwordStrength(password).id + 1);
  }, [generatedPassword, password]);

  useEffect(() => {
    setPassword(generatedPassword.password);
    setPasswordStrengthNumber(generatedPassword.passwordStrength);

    //Disabling bc of we dont need to update password on every render
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [passwordLength, uppercaseLetters, lowercaseLetters, symbols, numbers]);

  const onClickCopyPassword = () => {
    if (!generatedPassword.password) return;
    navigator.clipboard.writeText(password);

    addNewPassword({
      password: generatedPassword.password,
      generatedDate: generatedPassword.date,
    });

    toast({
      title: t('password_copy'),
      status: 'info',
      duration: 2000,
      isClosable: true,
    });
  };

  const resetState = () => {
    setPassword('');
    setPasswordStrengthNumber(10);
    setUppercaseLetters(true);
    setLowercaseLetters(true);
    setSymbols(true);
    setNumbers(false);
    setPasswordLength(0);
  };

  return (
    <Box width='fit-content'>
      <PasswordInput
        passwordStrength={passwordStrengthNumber}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onReset={() => resetState()}
      />
      <Button
        marginTop='20px'
        variant='primary'
        rightIcon={<Icon as={ArrowForwardIcon} width='24px' height='24px' />}
        onClick={onClickCopyPassword}
      >
        {t('copy_password')}
      </Button>
      <NumberSlider
        focusThumbOnChange={false}
        value={passwordLength}
        onChange={(v) => setPasswordLength(v)}
      />

      <Grid
        marginTop='64px'
        width={{ base: '100%', lg: '540px' }}
        gridTemplateColumns={'repeat(2,1fr)'}
        columnGap={{ base: '20px', lg: '80px' }}
        rowGap='30px'
      >
        <StyledCheckbox
          isChecked={uppercaseLetters}
          onChange={(e) => setUppercaseLetters(e.target.checked)}
        >
          {t('uppercase_letters')}
        </StyledCheckbox>
        <StyledCheckbox
          isChecked={lowercaseLetters}
          onChange={(e) => setLowercaseLetters(e.target.checked)}
        >
          {t('lowercase_letters')}
        </StyledCheckbox>
        <StyledCheckbox
          isChecked={numbers}
          onChange={(e) => setNumbers(e.target.checked)}
        >
          {t('numbers')}
        </StyledCheckbox>
        <StyledCheckbox
          isChecked={symbols}
          onChange={(e) => setSymbols(e.target.checked)}
        >
          {t('symbols')}
        </StyledCheckbox>
      </Grid>
    </Box>
  );
};
