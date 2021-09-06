import React from 'react';
import { render, screen } from '@testing-library/react';
import Screen from './Screen';

test('renders learn react link', () => {
  render(<Screen greeting="Test greeting" />);
});
