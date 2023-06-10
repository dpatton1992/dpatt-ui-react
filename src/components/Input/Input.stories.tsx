import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Input from './Input';

const meta: Meta<typeof Input> = {
	component: Input,
	title: 'dpatt/InputField',
	argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Primary: Story = (args) => (
	<div style={{ maxWidth: '300px' }}>
		<Input data-testId="InputField-id" {...args} />
	</div>
);
Primary.args = {
	error: false,
	disabled: false,
	label: 'Primary',
};

export const Success: Story = (args) => (
	<div style={{ maxWidth: '300px' }}>
		<Input data-testId="InputField-id" {...args} />
	</div>
);
Success.args = {
	error: false,
	success: true,
	disabled: false,
	label: 'Success',
};

export const Error: Story = (args) => (
	<div style={{ maxWidth: '300px' }}>
		<Input data-testId="InputField-id" {...args} />
	</div>
);
Error.args = {
	error: true,
	disabled: false,
	message: 'Error',
};

export const Disabled: Story = (args) => (
	<div style={{ maxWidth: '300px' }}>
		<Input data-testId="InputField-id" {...args} />
	</div>
);
Disabled.args = {
	disabled: true,
	label: 'Disabled',
};
