import { render, screen } from '@testing-library/react'
import App from './App'

describe('test initialized app', () => {
  test('render music player text', () => {
    render(<App />)
    const linkElement = screen.getByText(/Плеер/i)
    expect(linkElement).toBeInTheDocument()
  })
})
