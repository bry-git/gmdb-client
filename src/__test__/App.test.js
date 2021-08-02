import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Main App component test', () => {
  beforeEach(() => {
    render(<App />)
  })

  it('renders the top navbar component', () => {
      expect(screen.getByText(/GMDB/i)).toBeVisible();
      expect(screen.getByText(/login/i)).toBeVisible();
      expect(screen.getByText(/Home/i)).toBeVisible();
      expect(screen.getByRole('button', {name: /search/i})).toBeVisible();
      expect(screen.getByLabelText(/search/i)).toBeVisible();
  })

  it('links in navbar navigate to appropriate endpoint', () => {
    
  })
})
