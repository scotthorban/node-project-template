import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { App } from './App';

describe('App Component', () => {
  it('renders Hello World title and badge', () => {
    render(<App />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Hello World!');
    expect(screen.getByText('React + TypeScript App')).toBeInTheDocument();
  });

  it('increments click count on button click', async () => {
    const user = userEvent.setup();
    render(<App />);

    const button = screen.getByRole('button', { name: /clicks: 0/i });
    expect(button).toBeInTheDocument();

    await user.click(button);
    expect(screen.getByRole('button', { name: /clicks: 1/i })).toBeInTheDocument();

    await user.click(button);
    expect(screen.getByRole('button', { name: /clicks: 2/i })).toBeInTheDocument();
  });
});
