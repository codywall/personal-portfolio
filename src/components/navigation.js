import React from 'react';
import {
  createStyles,
  Header,
  Container,
  Group,
  Button,
  Burger,
  rem,
  Menu,
  Paper,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Colors from '../utils/colors';

const HEADER_HEIGHT = rem(60);

const useStyles = createStyles((theme) => ({
  inner: {
    height: HEADER_HEIGHT,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  cta: {
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
  },

  linkLabel: {
    marginRight: rem(5),
    background: 'none',
  },
  menu: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    right: 0,
    transform: 'translateY(-100%)',
    transition: 'transform 0.3s ease-in-out',
    '&.opened': {
      transform: 'translateY(0)',
    },
  },
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
  const items = links.map((link) => (
    <Link key={link.label} to={link.link} className={classes.link}>
      {link.label}
    </Link>
  ));

  const mobileItems = links.map((link) => (
    <Menu.Item key={link.label}>
      <Link to={link.link} className={classes.link}>
        {link.label}
      </Link>
    </Menu.Item>
  ));

  return (
    <Header height={HEADER_HEIGHT} sx={{ borderBottom: 0 }}>
      <Container>
        <Container className={classes.inner} fluid>
          <Group>
            <Logo to="/">
              Cody
              <br />
              Wall
            </Logo>
          </Group>
          <div className={`${classes.menu} ${opened ? 'opened' : ''}`}>
            {opened && (
              <Menu
                control={
                  <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
                }
                menuPosition={{ top: 'bottom', right: 'center' }}
                menuWidth={250}
                transition="rotate-right"
              >
                <Paper radius="sm" p="lg" shadow="lg">
                  {mobileItems}
                </Paper>
              </Menu>
            )}
          </div>
          <Group spacing={5} className={classes.links}>
            {items}
          </Group>
          <Button radius="xl" h={30} component="a" href="/contact" className={classes.cta}>
            Get in Touch
          </Button>
          <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
        </Container>
      </Container>
    </Header>
  );
}

export default Navigation;
