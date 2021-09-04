import React from 'react';
import { render, screen } from '@testing-library/react';
import PostScreen from './PostScreen';

test('renders learn react link', () => {
  render(<PostScreen greeting="Test greeting" />);
});
