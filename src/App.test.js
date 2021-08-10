import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders changed text link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/I was changed from feature branch/i);
  expect(linkElement).toBeInTheDocument();
});
