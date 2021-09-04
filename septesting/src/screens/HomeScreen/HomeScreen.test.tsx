import React from 'react';
import { render, screen } from '@testing-library/react';
import HomeScreen from './HomeScreen';

test('renders learn react link', () => {
  render(<HomeScreen greeting="Test greeting" />);
});
