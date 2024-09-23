import { Checkbox, CheckboxProps } from '@chakra-ui/react';

export const StyledCheckbox: React.FC<CheckboxProps> = ({
  children,
  ...props
}) => {
  return (
    <Checkbox
      {...props}
      border='#F8EF00'
      iconColor='transparent'
      _checked={{
        '& .chakra-checkbox__control': {
          background: '#F8EF00',
          border: '#F8EF00',
        },
      }}
      width={{ base: 'fit-content', lg: 'initial' }}
      color='#fff'
      fontSize='16px'
      size='lg'
    >
      {children}
    </Checkbox>
  );
};
