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
      expect(screen.getByRole('button', {name: /submit/i})).toBeVisible();
      expect(screen.getByLabelText(/search/i)).toBeVisible();
  })

  it('links in navbar navigate to appropriate endpoint', () => {
      screen.getByRole('link', {name: 'Login'}).click()
      expect(screen.getByText(/Email Address/i)).toBeVisible();
      expect(screen.getByRole('textbox', {name: 'Email address'})).toBeVisible();
      expect(screen.getByText(/Password/i)).toBeVisible();
      //expect(screen.queryByRole('textbox', {name: 'Password'})).toBeVisible();

      screen.getByRole('link', {name: 'Home'}).click()
      setTimeout(() => {
        expect(screen.getByLabelText('Guardians of the Galaxy Vol. 2'))
      },2000)
  })

  it('movie gallery renders a list of movie cards', () => {
    setTimeout(() => {
      expect(screen.getAllByLabelText('movie-card'))
    },2000)
  })
})
