import { render, screen } from '@testing-library/react'
import App from './App'

describe('test initialized app', () => {
  test('render link element', () => {
    render(<App />)
    const linkElement = screen.getByText(/Обо мне/i)
    expect(linkElement).toBeInTheDocument()
  })
})
