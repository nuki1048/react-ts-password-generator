import { Icon } from '@chakra-ui/react';

export const PasswordStrengthIcon: React.FC<{ number: number }> = ({
  number,
}) => {
  return (
    <Icon width='24px' height='24px' data-testid='password-strength-icon'>
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g id='Strengmeter'>
          <rect
            id='Rectangle 5'
            x='2'
            y='18'
            width='20'
            height='3'
            fill={number > 1 ? '#00F0FF' : '#FF003C'}
          />
          <rect
            id='Rectangle 6'
            x='2'
            y='13'
            width='20'
            height='3'
            fill={number > 2 ? '#00F0FF' : '#FF003C'}
          />
          <rect
            id='Rectangle 7'
            x='2'
            y='8'
            width='20'
            height='3'
            fill={number > 3 ? '#00F0FF' : '#FF003C'}
          />
          <rect
            id='Rectangle 8'
            x='2'
            y='3'
            width='20'
            height='3'
            fill={number > 4 ? '#00F0FF' : '#FF003C'}
          />
        </g>
      </svg>
    </Icon>
  );
};
