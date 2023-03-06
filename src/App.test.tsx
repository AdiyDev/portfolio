import { render, screen } from '@testing-library/react'

import App from './App'

describe('test initialized app', () => {
  test('render music player text', () => {
    render(<App />)
    const divElement = screen.getByText(/Плеер/i)
    expect(divElement).toBeInTheDocument()
  })
})
