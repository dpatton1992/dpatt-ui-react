import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme';
import MenuLink from './MenuLink';

// const theme = {
// 	colors: {
// 		primary: '#49a078ff', // jungle-green
// 		secondary: '#216869ff', // caribbean-current
// 		tertiary: '#9cc5a1ff', // cambridge-blue
// 		text: '#49a078ff', // eerie-black
// 		textLight: '#E4E3EA', // platinum
// 	},
// };

const meta: Meta<typeof MenuLink> = {
	component: MenuLink,
	title: 'dpatt/MenuLink',
	argTypes: {},
};
export default meta;

type Story = StoryObj<typeof MenuLink>;

export const Primary: Story = (args) => (
	<div style={{ maxWidth: '300px', fontFamily: 'sans-serif' }}>
		<ThemeProvider theme={theme}>
			<MenuLink data-test-id="MenuLink-id" {...args} />
		</ThemeProvider>
	</div>
);
Primary.args = {
	primary: true,
	text: 'Primary',
};

export const Secondary: Story = (args) => (
	<div style={{ maxWidth: '300px', fontFamily: 'sans-serif' }}>
		<ThemeProvider theme={theme}>
			<MenuLink data-test-id="MenuLink-id" {...args} />
		</ThemeProvider>
	</div>
);
Secondary.args = {
	primary: false,
	text: 'Secondary',
};

export const Small: Story = (args) => (
	<div style={{ maxWidth: '300px', fontFamily: 'sans-serif' }}>
		<ThemeProvider theme={theme}>
			<MenuLink data-test-id="InputField-id" {...args} />
		</ThemeProvider>
	</div>
);
Small.args = {
	size: 'small',
	text: 'Small',
};

export const Medium: Story = (args) => (
	<div style={{ maxWidth: '300px', fontFamily: 'sans-serif' }}>
		<ThemeProvider theme={theme}>
			<MenuLink data-test-id="InputField-id" {...args} />
		</ThemeProvider>
	</div>
);
Medium.args = {
	size: 'medium',
	text: 'Medium',
};

export const Large: Story = (args) => (
	<div style={{ maxWidth: '300px', fontFamily: 'sans-serif' }}>
		<ThemeProvider theme={theme}>
			<MenuLink data-test-id="InputField-id" {...args} />
		</ThemeProvider>
	</div>
);
Large.args = {
	size: 'large',
	text: 'Large',
};
