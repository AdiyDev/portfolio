import { render, screen } from '@testing-library/react'

// import App from './App'
import { AboutPage } from './pages/AboutPage'

describe('test initialized app', () => {
  test('render about page text', () => {
    render(<AboutPage />)

    const divElement = screen.getByText(/AboutPage/i)
    expect(divElement).toBeInTheDocument()
  })
})
