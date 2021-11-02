import * as React from 'react';
import styled from 'styled-components';
import { Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const PageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e6e6fa;
`;
const ContentContainer = styled.div`
  text-align: center;
  > * {
    margin-bottom: 18px;
  }
`;

interface NotFoundPageProps {}

const NotFoundPage: React.FunctionComponent<NotFoundPageProps> = () => {
  return (
    <PageContainer>
      <ContentContainer>
        <Typography variant="h4">
          This is not what you're looking for.
        </Typography>
        <Typography variant="body1">
          All that is gold does not glitter, Not all those who wander are lost.
          But you can still end up here.
        </Typography>
        <Link to="/dashboard" style={{ textDecoration: 'none' }}>
          <Button variant="contained">Back to Dashboard</Button>
        </Link>
      </ContentContainer>
    </PageContainer>
  );
};

export default NotFoundPage;
