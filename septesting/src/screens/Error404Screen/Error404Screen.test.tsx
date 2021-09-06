import React from 'react';
import { render, screen } from '@testing-library/react';
import Error404Screen from './Error404Screen';

test('renders learn react link', () => {
  render(<Error404Screen greeting="Test greeting" />);
});
