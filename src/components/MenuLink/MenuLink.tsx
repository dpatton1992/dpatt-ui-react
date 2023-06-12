import React from 'react';
import styled from 'styled-components';
import { MenuLinkProps } from './MenuLink.types';

const StyledMenuLink = styled.a<MenuLinkProps>`
	background: transparent;
	border: none;
	text-decoration: none;
	line-height: 1;
	font-size: 1em;
	cursor: pointer;
	font-weight: 700;
	color: ${(props) =>
		props.primary
			? props.theme.colors.accent
			: props.theme.colors.accentSecondary};
	display: inline-block;
	position: relative;
	overflow: hidden;
	-webkit-transition: all 0.5s cubic-bezier(0.67, -0.51, 0.42, 1.43);
	transition: all 0.5s cubic-bezier(0.67, -0.51, 0.42, 1.43);
	&:hover {
		font-size: 1.1em;
		border-bottom: solid 2px ${(props) => props.theme.colors.accent};
		background-color: ${(props) =>
			props.primary
				? props.theme.colors.primary
				: props.theme.colors.secondary};
	}
	&:active {
		border: none;
	}
	&::before {
		content: '';
		position: absolute;
		top: -50%;
		right: -50%;
		bottom: -50%;
		left: -50%;
		background: -webkit-gradient(
			linear,
			left top,
			left bottom,
			from(rgba(209, 112, 60, 0)),
			color-stop(50%, rgba(255, 255, 255, 0.5)),
			to(rgba(209, 112, 60, 0))
		);
		background: linear-gradient(
			to bottom,
			rgba(209, 112, 60, 0),
			rgba(255, 255, 255, 0.5) 50%,
			rgba(209, 112, 60, 0)
		);
		-webkit-transform: rotateZ(60deg) translate(-5em, 7.5em);
		transform: rotateZ(60deg) translate(-5em, 7.5em);
	}
	/* &:hover:before,
	:focus:before,
	:active:before {
		animation: bounce 1s forwards;
	} */
`;

export const MenuLink: React.FC<MenuLinkProps> = ({
	primary,
	text,
	onClick,
	...props
}) => {
	return (
		<StyledMenuLink type="a" onClick={onClick} primary={primary} {...props}>
			{text}
		</StyledMenuLink>
	);
};

export default MenuLink;
