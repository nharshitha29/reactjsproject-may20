import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App Component', () => {

  it('renders the heading', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: /get started/i }))
      .toBeInTheDocument()
  })

  it('renders the counter button', () => {
    render(<App />)

    expect(
      screen.getByRole('button', { name: /count is 0/i })
    ).toBeInTheDocument()
  })

  it('increments the counter when clicked', () => {
    render(<App />)

    const button = screen.getByRole('button')

    fireEvent.click(button)

    expect(button).toHaveTextContent('Count is 1')
  })

  it('renders the Documentation section', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { name: /documentation/i })
    ).toBeInTheDocument()
  })

  it('renders the Connect with us section', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { name: /connect with us/i })
    ).toBeInTheDocument()
  })

  it('renders the Explore Vite link', () => {
    render(<App />)

    expect(
      screen.getByRole('link', { name: /explore vite/i })
    ).toHaveAttribute('href', 'https://vite.dev/')
  })

  it('renders the Learn more link', () => {
    render(<App />)

    expect(
      screen.getByRole('link', { name: /learn more/i })
    ).toHaveAttribute('href', 'https://react.dev/')
  })

})