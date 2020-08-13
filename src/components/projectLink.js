import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const LinkText = styled(Link)`
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
`;

const ProjectLink = ({ post }) => {
  return (
    <div>
      <LinkText to={post.frontmatter.slug}>{post.frontmatter.title}</LinkText>
      <p style={{ marginTop: '3px' }}>{post.summary}</p>
    </div>
  );
};
export default ProjectLink;
