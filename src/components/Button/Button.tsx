import React from 'react';
import styled, { keyframes } from 'styled-components';
import { ButtonProps } from './Button.types';

const sheen = keyframes`
	100% {
		transform: rotateZ(60deg) translate(1em, -9em);
	}
`;

const StyledButton = styled.button<ButtonProps>`
	border: 0;
	line-height: 1;
	font-size: 15px;
	cursor: pointer;
	font-weight: 700;
	border-radius: ${(props) => (props.round ? '3em' : '0.25em')};
	display: inline-block;
	position: relative;
	overflow: hidden;
	-webkit-transition: all 0.5s cubic-bezier(0.67, -0.51, 0.42, 1.43);
	transition: all 0.5s cubic-bezier(0.67, -0.51, 0.42, 1.43);
	padding: ${(props) =>
		props.size === 'small'
			? '7px 25px 8px'
			: props.size === 'medium'
			? '9px 30px 11px'
			: '14px 30px 16px'};
	color: ${(props) => (props.primary ? '#1b116e' : '#ffffff')};
	background-color: ${(props) => (props.primary ? '#6bedb5' : '#1b116e')};
	opacity: ${(props) => (props.disabled ? 0.5 : 1)};
	&:hover {
		background-color: ${(props) => (props.primary ? '#55bd90' : '#6bedb5')};
	}
	&:active {
		border: none;
		padding: ${(props) =>
			props.size === 'small'
				? '5px 23px 6px'
				: props.size === 'medium'
				? '7px 28px 9px'
				: '12px 28px 14px'};
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
	&:hover:before,
	:focus:before,
	:active:before {
		animation: ${sheen} 1s forwards;
	}
`;

export const Button: React.FC<ButtonProps> = ({
	size,
	primary,
	disabled,
	text,
	onClick,
	...props
}) => {
	return (
		<StyledButton
			type="button"
			onClick={onClick}
			primary={primary}
			disabled={disabled}
			size={size}
			{...props}
		>
			{text}
		</StyledButton>
	);
};
