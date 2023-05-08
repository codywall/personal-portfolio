import React from 'react';
import { createStyles, Header, Container, Group, Button, Burger, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Colors from '../utils/colors';

const HEADER_HEIGHT = rem(60);

const useStyles = createStyles(theme => ({
  inner: {
    height: HEADER_HEIGHT,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none'
    }
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none'
    }
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
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0]
    }
  },

  linkLabel: {
    marginRight: rem(5)
  }
}));

const Logo = styled(Link)`
  text-decoration: none;
  font-family: 'HouseSlant', 'Mrs Sheppards', cursive;
  font-weight: 400;
  color: ${Colors.accent};
  font-size: 1.6em;
  line-height: 0.85em;
`;

function Navigation({ links }) {
  const { classes } = useStyles();
  const [opened, { toggle }] = useDisclosure(false);
  const items = links.map(link => (
    <Link key={link.label} to={link.link} className={classes.link}>
      {link.label}
    </Link>
  ));

  return (
    <Header height={HEADER_HEIGHT} sx={{ borderBottom: 0 }} mb={120}>
      <Container>
        <Container className={classes.inner} fluid>
          <Group>
            <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
            <Logo to="/">
              Cody
              <br />
              Wall
            </Logo>
          </Group>
          <Group spacing={5} className={classes.links}>
            {items}
          </Group>
          <Button radius="xl" h={30}>
            Get in Touch
          </Button>
        </Container>
      </Container>
    </Header>
  );
}

export default Navigation;
