import React, { ButtonHTMLAttributes, FC } from 'react';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  data?: any;
}

const Button: FC<IButtonProps> = (props: IButtonProps) => {
  const { children, type = 'button', onClick } = props;
  console.log(onClick, 'ON_CLICK');

  return (
    <button type={type} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
