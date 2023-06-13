import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme';
import Modal from './Modal';

const meta: Meta<typeof Modal> = {
	component: Modal,
	title: 'dpatt/Modal',
	argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Modal>;

export const Primary: Story = (args) => (
	<div style={{ maxWidth: '300px', fontFamily: 'sans-serif' }}>
		<ThemeProvider theme={theme}>
			<Modal data-test-id="Modal-id" {...args} />
		</ThemeProvider>
	</div>
);
Primary.args = {
	text: 'Primary',
};

export const Secondary: Story = (args) => (
	<div style={{ maxWidth: '300px', fontFamily: 'sans-serif' }}>
		<ThemeProvider theme={theme}>
			<Modal data-test-id="Modal-id" {...args} />
		</ThemeProvider>
	</div>
);
Secondary.args = {
	primary: false,
	text: 'Secondary',
};

export const Custom: Story = (args) => (
	<div style={{ maxWidth: '300px', fontFamily: 'sans-serif' }}>
		<ThemeProvider theme={theme}>
			<Modal data-test-id="Modal-id" {...args} />
		</ThemeProvider>
	</div>
);
Custom.args = {
	backgroundColor: 'rgba(245, 40, 145, 0.8)',
	text: 'Custom',
};

export const Disabled: Story = (args) => (
	<div style={{ maxWidth: '300px', fontFamily: 'sans-serif' }}>
		<ThemeProvider theme={theme}>
			<Modal data-test-id="Modal-id" {...args} />
		</ThemeProvider>
	</div>
);
Disabled.args = {
	disabled: true,
	text: 'Disabled',
};

export const Small: Story = (args) => (
	<div style={{ maxWidth: '300px', fontFamily: 'sans-serif' }}>
		<ThemeProvider theme={theme}>
			<Modal data-test-id="Modal-id" {...args} />
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
			<Modal data-test-id="Modal-id" {...args} />
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
			<Modal data-test-id="Modal-id" {...args} />
		</ThemeProvider>
	</div>
);
Large.args = {
	size: 'large',
	text: 'Large',
};

export const Round: Story = (args) => (
	<div style={{ maxWidth: '300px', fontFamily: 'sans-serif' }}>
		<ThemeProvider theme={theme}>
			<Modal data-test-id="Modal-id" {...args} />
		</ThemeProvider>
	</div>
);
Round.args = {
	round: true,
	text: 'Round',
};
