const App = () => {
  return (
    <>
      <header>
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
      </header>
      <main>dynamic background</main>
      <section>Плеер</section>
      <aside>Опрос c D3.js</aside>
      <footer>2023</footer>
    </>
  )
}

export default App
