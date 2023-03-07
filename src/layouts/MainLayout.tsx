import { AppShell } from '@mantine/core'
import { MainHeader } from '@/shared/ui/MainShell/MainHeader'
import { MainFooter } from '@/shared/ui/MainShell/MainFooter'

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
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
      {children}
    </AppShell>
  )
}

export default MainLayout
