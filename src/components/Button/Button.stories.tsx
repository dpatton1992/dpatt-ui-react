import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme';
import Button from './Button';

// const theme = {
// 	colors: {
// 		primary: '#49a078ff', // jungle-green
// 		secondary: '#216869ff', // caribbean-current
// 		tertiary: '#9cc5a1ff', // cambridge-blue
// 		text: '#49a078ff', // eerie-black
// 		textLight: '#E4E3EA', // platinum
// 	},
// };

const meta: Meta<typeof Button> = {
	component: Button,
	title: 'dpatt/Button',
	argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = (args) => (
	<div style={{ maxWidth: '300px', fontFamily: 'sans-serif' }}>
		<ThemeProvider theme={theme}>
			<Button data-test-id="InputField-id" {...args} />
		</ThemeProvider>
	</div>
);
Primary.args = {
	primary: true,
	disabled: false,
	text: 'Primary',
};

export const Secondary: Story = (args) => (
	<div style={{ maxWidth: '300px', fontFamily: 'sans-serif' }}>
		<ThemeProvider theme={theme}>
			<Button data-test-id="InputField-id" {...args} />
		</ThemeProvider>
	</div>
);
Secondary.args = {
	primary: false,
	disabled: false,
	text: 'Secondary',
};

export const Disabled: Story = (args) => (
	<div style={{ maxWidth: '300px', fontFamily: 'sans-serif' }}>
		<ThemeProvider theme={theme}>
			<Button data-test-id="InputField-id" {...args} />
		</ThemeProvider>
	</div>
);
Disabled.args = {
	primary: false,
	disabled: true,
	text: 'Disabled',
};

export const Small: Story = (args) => (
	<div style={{ maxWidth: '300px', fontFamily: 'sans-serif' }}>
		<ThemeProvider theme={theme}>
			<Button data-test-id="InputField-id" {...args} />
		</ThemeProvider>
	</div>
);
Small.args = {
	primary: true,
	disabled: false,
	size: 'small',
	text: 'Small',
};

export const Medium: Story = (args) => (
	<div style={{ maxWidth: '300px', fontFamily: 'sans-serif' }}>
		<ThemeProvider theme={theme}>
			<Button data-test-id="InputField-id" {...args} />
		</ThemeProvider>
	</div>
);
Medium.args = {
	primary: true,
	disabled: false,
	size: 'medium',
	text: 'Medium',
};

export const Large: Story = (args) => (
	<div style={{ maxWidth: '300px', fontFamily: 'sans-serif' }}>
		<ThemeProvider theme={theme}>
			<Button data-test-id="InputField-id" {...args} />
		</ThemeProvider>
	</div>
);
Large.args = {
	primary: true,
	disabled: false,
	size: 'large',
	text: 'Large',
};

export const Round: Story = (args) => (
	<div style={{ maxWidth: '300px', fontFamily: 'sans-serif' }}>
		<ThemeProvider theme={theme}>
			<Button data-test-id="InputField-id" {...args} />
		</ThemeProvider>
	</div>
);
Round.args = {
	primary: true,
	disabled: false,
	round: true,
	text: 'Round',
};
