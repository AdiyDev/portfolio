import image from '@/assets/image/404_img.svg'
import { createStyles, Image, Container, Title, Text, Button, SimpleGrid, rem } from '@mantine/core'

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: rem(80),
    paddingBottom: rem(80),
  },

  title: {
    fontWeight: 900,
    fontSize: rem(34),
    marginBottom: theme.spacing.md,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(32),
    },
  },

  control: {
    [theme.fn.smallerThan('sm')]: {
      width: '100%',
    },
  },

  mobileImage: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  desktopImage: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },
}))

export function NotFoundPage() {
  const { classes } = useStyles()

  return (
    <Container className={classes.root}>
      <SimpleGrid spacing={80} cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1, spacing: 40 }]}>
        <Image src={image} className={classes.mobileImage} />
        <div>
          <Title className={classes.title}>Что то пошло не так...</Title>
          <Text color="dimmed" size="lg">
            Страница, которую вы пытаетесь открыть, не существует. Возможно, вы ошиблись при вводе адреса или страница
            была перемещена по другому URL-адресу.
          </Text>
          <Button variant="outline" size="md" mt="xl" className={classes.control}>
            Вернуться на главную
          </Button>
        </div>
        <Image src={image} className={classes.desktopImage} />
      </SimpleGrid>
    </Container>
  )
}
