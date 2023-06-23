import React from 'react';
import { createStyles, Card, Text, AspectRatio } from '@mantine/core';
import { GatsbyImage } from 'gatsby-plugin-image';

const useStyles = createStyles((theme) => ({
  card: {
    transition: 'transform 150ms ease, box-shadow 150ms ease',

    '&:hover': {
      transform: 'scale(1.01)',
      boxShadow: theme.shadows.md,
    },
  },

  title: {
    fontWeight: 600,
  },
}));

function ArticleCard({ image, title, date, link }) {
  const { classes } = useStyles();
  const dateString = date;
  const rawDate = new Date(dateString);
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  const formattedDate = rawDate.toLocaleDateString('en-US', options);

  return (
    <Card key={title} p="md" radius="md" component="a" href={link} className={classes.card}>
      <GatsbyImage aspectRatio={16 / 9} image={image} alt={title} />
      <Text color="dimmed" size="xs" transform="uppercase" weight={700} mt="md">
        {formattedDate}
      </Text>
      <Text className={classes.title} mt={5}>
        {title}
      </Text>
    </Card>
  );
}

export default ArticleCard;
