import React from 'react';
import { render, screen } from '@testing-library/react';
import Head from './Head';

test('renders learn react link', () => {
  render(<Head greeting="Test greeting" />);
});
