import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('axios');

test('renders people button', () => {
  render(<App />);
  const linkElement = screen.getByText(/People/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Popular button', () => {
  render(<App />);
  const linkElement = screen.getByText(/Popular/i);
  expect(linkElement).toBeInTheDocument();
});
