import styled from '@emotion/styled'
import { MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import MainLayout from './layouts/MainLayout'

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
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: 'dark',
        globalStyles: (theme) => ({
          html: {
            textRendering: 'optimizeLegibility',
          },
          body: {
            ...theme.fn.fontStyles(),
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
            color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
            lineHeight: theme.lineHeight,
          },
        }),
      }}
    >
      <Notifications />
      <MainLayout>
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
      </MainLayout>
    </MantineProvider>
  )
}

export default App
