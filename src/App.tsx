import styled from '@emotion/styled'

type PrimaryType = {
  primary?: boolean
}

const MainHeader = styled.header<PrimaryType>((props) => ({
  display: 'flex',
  background: 'teal',
  color: props.primary ? 'red' : 'blue',
}))

const App = () => {
  return (
    <>
      <MainHeader primary>
        <a href="#">logo</a>
        <nav>
          <ul>
            <li>Обо мне</li>
            <li>Навыки</li>
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
      </MainHeader>
      <main>
        <section>dynamic background</section>
        <section>Плеер</section>
      </main>
      <aside>Опрос c D3.js</aside>
      <footer>
        2023
        <ul>
          <li>habr</li>
          <li>github</li>
          <li>ln</li>
        </ul>
      </footer>
    </>
  )
}

export default App
