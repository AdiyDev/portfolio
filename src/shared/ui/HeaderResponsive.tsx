import { useState } from 'react'
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  rem,
  Avatar,
  ActionIcon,
  Button,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import myAvatar from '@/assets/image/myAvatar.png'
import { IconLanguage, IconSun, IconMoonStars } from '@tabler/icons-react'
import { notifications } from '@mantine/notifications'

const HEADER_HEIGHT = rem(60)

const useStyles = createStyles((theme) => ({
  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
}))

interface HeaderResponsiveProps {
  links: { link: string; label: string }[]
}

export function HeaderResponsive({ links }: HeaderResponsiveProps) {
  const [opened, { toggle, close }] = useDisclosure(false)
  const [active, setActive] = useState(links[0].link)
  const { classes, cx } = useStyles()

  //@todo: add color scheme  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const [appTheme, setAppTheme] = useState('dark')

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      onClick={(event) => {
        event.preventDefault()
        setActive(link.link)
        close()
      }}
    >
      {link.label}
    </a>
  ))

  return (
    <Header height={HEADER_HEIGHT} p="md">
      <Container className={classes.header}>
        <Group spacing="sm">
          <ActionIcon color="blue" variant="light">
            <IconLanguage size="1.2rem" />
          </ActionIcon>
          <ActionIcon
            color="blue"
            variant="light"
            sx={(theme) => ({
              backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
              color: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.blue[6],
            })}
            onClick={() => setAppTheme(appTheme === 'dark' ? 'light' : 'dark')}
          >
            {appTheme === 'dark' ? <IconSun size="1.2rem" /> : <IconMoonStars size="1.2rem" />}
          </ActionIcon>
          <Button
            size="xs"
            variant="gradient"
            gradient={{ from: 'indigo', to: 'cyan' }}
            onClick={() =>
              notifications.show({
                autoClose: 2000,
                title: 'В разработке',
                message: 'будет позже...',
              })
            }
          >
            Регистрация
          </Button>
        </Group>
        <Avatar
          component="a"
          href="https://www.linkedin.com/in/arkadiy-bashirov-13a4b6212/"
          target="_blank"
          src={myAvatar}
          alt="it's me"
        />
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>
        <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  )
}
