import { MouseEventHandler } from 'react';

export interface ButtonProps {
	text?: string;
	primary?: boolean;
	backgroundColor?: string;
	disabled?: boolean;
	size?: 'small' | 'medium' | 'large';
	round?: boolean;
	onClick?: MouseEventHandler<HTMLButtonElement>;
}
