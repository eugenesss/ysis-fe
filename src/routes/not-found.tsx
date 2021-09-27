import * as React from "react";
import styled from "styled-components";

const PageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface NotFoundPageProps {}

const NotFoundPage: React.FunctionComponent<NotFoundPageProps> = () => {
  return (
    <PageContainer>
      <p>page not found</p>
    </PageContainer>
  );
};

export default NotFoundPage;
