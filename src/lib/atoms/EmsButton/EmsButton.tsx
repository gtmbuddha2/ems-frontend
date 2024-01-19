import Button, { ButtonProps } from '@mui/material/Button/Button';

export interface EmsButtonProps extends ButtonProps {
  label?: string;
}

export const EmsButton = ({ label, children, ...rest }: EmsButtonProps) => {
  return <Button {...rest}>{label || children}</Button>;
};
