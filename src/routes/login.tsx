import * as React from "react";
import { Grid } from "@mui/material";
import styled from "styled-components";

const LoginPageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface LoginPageProps {}

const LoginPage: React.FunctionComponent<LoginPageProps> = () => {
  return (
    <LoginPageContainer>
      <Grid container justifyContent="center">
        <Grid item md={4} xs={12}>
          login
        </Grid>
      </Grid>
    </LoginPageContainer>
  );
};

export default LoginPage;
