import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import MenuLink from './MenuLink';

describe('Running Test for MenuLink', () => {
	test('Check Button Disabled', () => {
		render(<MenuLink text="MenuLink dpatt" />);
		expect(screen.getByRole('a', { name: 'MenuLink dpatt' }));
	});
});
