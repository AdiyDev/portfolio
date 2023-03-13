import { Loader, MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { RouterProvider } from 'react-router-dom'
import { router } from './app/router'

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
      <RouterProvider router={router} fallbackElement={<Loader color="violet" variant="bars" />} />
    </MantineProvider>
  )
}

export default App
