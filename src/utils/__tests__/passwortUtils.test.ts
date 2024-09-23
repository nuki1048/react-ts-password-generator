import { hashString, generatePassword } from '../passwordUtils';

describe('passwordUtils', () => {
  describe('hashString', () => {
    it('should hash a string', () => {
      const str = 'password123';
      const hashedString = hashString(str);

      expect(hashedString).toBeDefined();
      expect(hashedString).not.toEqual(str);
    });
  });

  describe('generatePassword', () => {
    it('should generate a password with specified options', () => {
      const options = {
        length: 10,
        uppercase: true,
        lowercase: true,
        numbers: true,
        symbols: false,
      };

      const { password, passwordStrength, date } = generatePassword(options);

      expect(password).toBeDefined();
      expect(password.length).toBe(options.length);
      expect(passwordStrength).toBeDefined();
      expect(date).toBeDefined();
    });

    it('should generate a password with default options', () => {
      const { password, passwordStrength, date } = generatePassword({
        length: 8,
        uppercase: true,
        lowercase: true,
        numbers: true,
        symbols: true,
      });

      expect(password).toBeDefined();
      expect(password.length).toBe(8);
      expect(passwordStrength).toBeDefined();
      expect(date).toBeDefined();
    });

    it('shouldn generate a password with default options if none are provided', () => {
      const { password, passwordStrength, date } = generatePassword({});

      expect(password).toBeDefined();
      expect(password.length).toBe(8);
      expect(passwordStrength).toBeDefined();
      expect(date).toBeDefined();
    });
  });
});
