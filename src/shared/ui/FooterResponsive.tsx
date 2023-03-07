import { createStyles, Group, ActionIcon, rem, Avatar, Footer, Text, Container } from '@mantine/core'
import { IconBrandGithub, IconBrandLinkedin, IconUfo, IconHeartFilled } from '@tabler/icons-react'

const FOOTER_HEIGHT = rem(60)

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: `${rem(16)}`,

    [theme.fn.smallerThan('xs')]: {
      padding: `${rem(16)} ${rem(12)}`,
    },
  },
}))

export function FooterResponsive() {
  const { classes } = useStyles()
  const currentYear = new Date().getFullYear()

  return (
    <Footer height={FOOTER_HEIGHT}>
      <Container className={classes.inner}>
        <Group spacing="xs">
          <Text color="dimmed" size="sm">
            Портфолио
          </Text>
          <Avatar color="red" radius="xl" size="sm">
            <IconHeartFilled size="1rem" />
          </Avatar>
          <Text color="dimmed" size="sm">
            © {currentYear}
          </Text>
        </Group>

        <Group spacing="xs" position="right" noWrap>
          <ActionIcon component="a" href="https://github.com/AdiyDev" target="_blank" color="blue" variant="light">
            <IconBrandGithub size="1.2rem" />
          </ActionIcon>
          <ActionIcon
            component="a"
            href="https://www.linkedin.com/in/arkadiy-bashirov-13a4b6212/"
            target="_blank"
            color="blue"
            variant="light"
          >
            <IconBrandLinkedin size="1.2rem" />
          </ActionIcon>
          <ActionIcon
            component="a"
            href="https://career.habr.com/adiydevwork"
            target="_blank"
            color="blue"
            variant="light"
          >
            <IconUfo size="1.2rem" />
          </ActionIcon>
        </Group>
      </Container>
    </Footer>
  )
}
