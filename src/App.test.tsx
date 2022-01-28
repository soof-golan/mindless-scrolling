import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Mindless App', () => {
  it('should render the image', () => {
    render(<App />);
    const linkElement = screen.getByAltText(/mindless/i);
    expect(linkElement).toBeInTheDocument();
  });
});
