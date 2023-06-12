import React from 'react';
import styled, { keyframes } from 'styled-components';
import { MenuLinkProps } from './MenuLink.types';

const shimmer = keyframes`
	100% {
		transform: translateX(100%);
	}
`;

const StyledMenuLink = styled.a<MenuLinkProps>`
	background: transparent;
	border: none;
	text-decoration: none;
	line-height: 1;
	font-size: ${(props) =>
		props.size === 'small'
			? '0.8em'
			: props.size === 'medium'
			? '1em'
			: '1.2em'};
	cursor: pointer;
	font-weight: 500;
	color: ${(props) =>
		props.primary ? props.theme.colors.primary : props.theme.colors.secondary};
	display: inline-block;
	position: relative;
	padding: ${(props) =>
		props.size === 'small'
			? '7px 25px 8px'
			: props.size === 'medium'
			? '9px 30px 11px'
			: '1em 2em 1em'};
	overflow: hidden;
	-webkit-transition: translate 0.5s cubic-bezier(0.67, -0.51, 0.42, 1.43);
	transition: translate 0.5s cubic-bezier(0.67, -0.51, 0.42, 1.43);
	&:hover {
		/* font-size: 1.1em; */
		border-bottom: solid 2px
			${(props) =>
				props.primary
					? props.theme.colors.primary
					: props.theme.colors.secondary};
		/* background-color: ${(props) =>
			props.primary
				? props.theme.colors.primary
				: props.theme.colors.secondary}; */
	}
	&:active {
		border: none;
	}
	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
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
		-webkit-transform: translateX(-100%);
		transform: translateX(-100%);
	}
	&:hover:before,
	:focus:before,
	:active:before {
		border-bottom: solid 2px
			${(props) =>
				props.primary
					? props.theme.colors.primary
					: props.theme.colors.secondary};
		animation: ${shimmer} 0.3s forwards;
	}
`;

export const MenuLink: React.FC<MenuLinkProps> = ({
	primary = true,
	text,
	href = '#',
	size = 'medium',
	target = '_blank',
	onClick,
	onMouseEnter,
	onMouseLeave,
	...props
}) => {
	return (
		<StyledMenuLink
			type="a"
			onClick={onClick}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			href={href}
			target={target}
			size={size}
			primary={primary}
			{...props}
		>
			{text}
		</StyledMenuLink>
	);
};

export default MenuLink;
