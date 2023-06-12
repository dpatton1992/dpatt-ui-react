import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';

import Input from './Input';

describe('Running Test for dpatt Input', () => {
	test('Check placeholder in Input', () => {
		render(<Input placeholder="Hello dpatt" />);
		expect(screen.getByPlaceholderText('Hello dpatt')).toHaveAttribute(
			'placeholder',
			'Hello dpatt'
		);
	});

	test('renders the Input component', async () => {
		render(<Input placeholder="dpatt" />);
		const input = screen.getByPlaceholderText('dpatt') as HTMLInputElement;
		userEvent.type(input, 'Hello world!');
		await waitFor(() => expect(input.value).toBe('Hello world!'));
	});
});
