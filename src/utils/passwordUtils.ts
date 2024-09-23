import { genSaltSync, hashSync } from 'bcryptjs';
import { passwordStrength } from 'check-password-strength';
import { generate } from 'generate-password-browser';

export const hashString = (str: string): string => {
  const salt = genSaltSync(2);

  return hashSync(str, salt);
};

export const generatePassword = ({
  length = 8,
  uppercase = true,
  lowercase = true,
  numbers = true,
  symbols = true,
}: {
  length?: number;
  uppercase?: boolean;
  lowercase?: boolean;
  numbers?: boolean;
  symbols?: boolean;
}): { password: string; passwordStrength: number; date: string } => {
  const password = generate({
    length,
    uppercase,
    lowercase,
    numbers,
    symbols,
  });

  const passwordStrengthNumber = passwordStrength(password).id;
  const hashedDate = hashString(new Date().toISOString());

  return {
    password,
    passwordStrength: passwordStrengthNumber,
    date: hashedDate,
  };
};
