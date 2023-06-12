import { MouseEventHandler } from 'react';

export interface MenuLinkProps {
	text?: string;
	primary?: boolean;
	href?: string;
	onClick?: MouseEventHandler<HTMLLinkElement> &
		MouseEventHandler<HTMLAnchorElement>;
	target?: string;
}
