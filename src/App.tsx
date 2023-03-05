import { Global, css } from '@emotion/react'
import styled from '@emotion/styled'

const Header = styled.header({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: '#2196f3',
  padding: '0 2rem',
})

const MainContainer = styled.main({
  width: '100%',
  padding: '2rem 0',
})

const Footer = styled.footer({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: '#2196f3',
  padding: '0 2rem',
})

const App = () => {
  return (
    <>
      <Global
        styles={css`
          html {
            font-family: sans-serif;
            text-rendering: optimizeLegibility;
          }
          body {
            font-family: 'Roboto', 'HelveticaNeue', 'Helvetica Neue', sans-serif;
            font-size: 16px;
          }
        `}
      />
      <Header>
        <div>logo</div>
        <nav>
          <ul>
            <li>Обо мне</li>
            <li>Проекты</li>
          </ul>
        </nav>
        <ul style={{ listStyle: 'square' }}>
          <li>i18n</li>
          <li>theme switch</li>
          <li>
            <button type="button">sign in</button>
          </li>
        </ul>
      </Header>
      <MainContainer>
        <section>dynamic background</section>
        <section>Плеер</section>
      </MainContainer>
      <Footer>
        2023
        <ul>
          <li>habr</li>
          <li>github</li>
          <li>ln</li>
        </ul>
      </Footer>
    </>
  )
}

export default App
