import React, { FC, Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';
import { InputProps } from './Input.types';

const StyledInput = styled.input<InputProps>`
	background-color: transparent;
	border: 0;
	display: block;
	width: 100%;
	padding: 1em 0;
	font-size: 1em;
	color: ${(props) => props.theme.colors.primary};
	border-bottom: solid 2px
		${(props) =>
			props.disabled
				? props.theme.colors.disabled
				: props.error
				? props.theme.colors.error
				: props.success
				? props.theme.colors.accent
				: props.theme.colors.primary};
	&:focus {
		outline: 0;
		border-bottom-color: ${(props) =>
			props.error ? props.theme.colors.error : props.theme.colors.accent};
	}
`;

const StyledLabel = styled.div<InputProps>`
	position: absolute;
	top: 2em;
	left: 1em;
	color: ${(props) =>
		props.disabled ? props.theme.colors.disabled : props.theme.colors.primary};
	padding-bottom: 6px;
`;

const StyledMessage = styled.div<InputProps>`
	font-size: 14px;
	color: ${(props) => props.theme.colors.error};
	padding-top: 4px;
`;

const StyledText = styled.p<InputProps>`
	margin: 0px;
	color: ${(props) =>
		props.disabled
			? props.theme.colors.disabled
			: props.error
			? props.theme.colors.error
			: props.success
			? props.theme.colors.accent
			: props.theme.colors.primary};
`;

const StyledSpan = styled.span<InputProps>`
	display: inline-block;
	font-size: 1em;
	min-width: 0.3em;
	transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
	transform: ${(props) =>
		props._empty === false ? 'translateY(-1.5em)' : 'translateY(0)'};

	{StyledInput}:focus-within & {
		transform: translateY(-1.5em);
		color: ${(props) => props.theme.colors.accent};
	}
`;

export const Input: FC<InputProps> = ({
	id,
	disabled,
	label,
	message,
	error,
	success,
	onChange,
	placeholder,
	...props
}) => {
	const [value, setValue] = useState('');
	const [empty, setEmpty] = useState(true);

	useEffect(() => {
		console.log(StyledInput);
	}, [value]);

	return (
		<Fragment>
			<StyledLabel>
				<StyledText disabled={disabled} error={error} success={success}>
					{label?.split('').map((letter, i) => (
						<StyledSpan
							key={Math.floor(i * Math.random() * 100000)}
							style={{ transitionDelay: i * 50 + 'ms' }}
							_empty={empty}
						>
							{letter}
						</StyledSpan>
					))}
				</StyledText>
			</StyledLabel>
			<StyledInput
				id={id}
				type="text"
				value={value}
				onChange={(e) => {
					const isEmpty = e.target.value === '';
					setValue(e.target.value);
					setEmpty(e.target.value === '');

					console.log(empty, isEmpty);

					if (onChange) onChange(e);
				}}
				disabled={disabled}
				error={error}
				success={success}
				placeholder={placeholder}
				{...props}
			></StyledInput>
			<StyledMessage>
				<StyledText error={error}>{message}</StyledText>
			</StyledMessage>
		</Fragment>
	);
};

export default Input;
