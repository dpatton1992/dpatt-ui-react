import React, { MouseEventHandler, ChangeEventHandler, FC } from 'react';

interface ButtonProps {
    text?: string;
    primary?: boolean;
    backgroundColor?: string;
    disabled?: boolean;
    size?: 'small' | 'medium' | 'large';
    round?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

declare const Button: React.FC<ButtonProps>;

interface InputProps {
    id?: string;
    label?: string;
    error?: boolean;
    message?: string;
    success?: boolean;
    disabled?: boolean;
    placeholder?: string;
    _empty?: boolean;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}

declare const Input: FC<InputProps>;

export { Button, Input };
