import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme';
import Input from './Input';

const meta: Meta<typeof Input> = {
	component: Input,
	title: 'dpatt/InputField',
	argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Primary: Story = (args) => (
	<div style={{ maxWidth: '300px', fontFamily: 'sans-serif' }}>
		<ThemeProvider theme={theme}>
			<Input data-testId="InputField-id" {...args} />
		</ThemeProvider>
	</div>
);
Primary.args = {
	error: false,
	disabled: false,
	label: 'Primary',
};

export const Success: Story = (args) => (
	<div style={{ maxWidth: '300px', fontFamily: 'sans-serif' }}>
		<ThemeProvider theme={theme}>
			<Input data-testId="InputField-id" {...args} />
		</ThemeProvider>
	</div>
);
Success.args = {
	error: false,
	success: true,
	disabled: false,
	label: 'Success',
};

export const Error: Story = (args) => (
	<div style={{ maxWidth: '300px', fontFamily: 'sans-serif' }}>
		<ThemeProvider theme={theme}>
			<Input data-testId="InputField-id" {...args} />
		</ThemeProvider>
	</div>
);
Error.args = {
	error: true,
	disabled: false,
	message: 'Error',
};

export const Disabled: Story = (args) => (
	<div style={{ maxWidth: '300px', fontFamily: 'sans-serif' }}>
		<ThemeProvider theme={theme}>
			<Input data-testId="InputField-id" {...args} />
		</ThemeProvider>
	</div>
);
Disabled.args = {
	disabled: true,
	label: 'Disabled',
};
