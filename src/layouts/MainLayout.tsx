import { Outlet } from 'react-router-dom'
import { AppShell } from '@mantine/core'
import { MainHeader } from '@/shared/ui/MainShell/MainHeader'
import { MainFooter } from '@/shared/ui/MainShell/MainFooter'

const MainLayout = () => {
  return (
    <AppShell
      padding="md"
      header={
        <MainHeader
          links={[
            { label: 'Обо мне', link: 'about' },
            { label: 'Проекты', link: 'projects' },
          ]}
        />
      }
      footer={<MainFooter />}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
      <Outlet />
    </AppShell>
  )
}

export default MainLayout
