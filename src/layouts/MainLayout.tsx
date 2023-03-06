import { AppShell, Footer } from '@mantine/core'
import { HeaderResponsive } from '@/shared/ui/HeaderResponsive'

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <AppShell
      padding="md"
      header={
        <HeaderResponsive
          links={[
            { label: 'Обо мне', link: 'about' },
            { label: 'Проекты', link: 'projects' },
          ]}
        />
      }
      footer={
        <Footer height={60} p="md">
          Application footer
        </Footer>
      }
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
      {children}
    </AppShell>
  )
}

export default MainLayout
