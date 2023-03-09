import { MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import MainLayout from './layouts/MainLayout'

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
        <section>three.js background</section>
        <section>
          <div>player</div>
        </section>
      </MainLayout>
    </MantineProvider>
  )
}

export default App
