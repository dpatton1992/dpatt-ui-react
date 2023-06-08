import { MouseEventHandler } from 'react';
export interface ButtonProps {
    text?: string;
    primary?: boolean;
    disabled?: boolean;
    size?: 'small' | 'medium' | 'large';
    round?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
