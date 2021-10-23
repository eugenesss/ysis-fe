import * as React from 'react';
import { Button, Grid, Typography, Paper } from '@mui/material';
import TextField from '@components/atoms/Textfield';

import { styled } from '@mui/system';
const LoginPageContainer = styled('div')({
  height: '100vh',
  width: '100vw',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f3f3f3',
});

const LoginWrapper = styled('div')(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '450px',
  margin: 'auto',
}));

const LoginItems = styled('div')(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

const LoginTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 600,
  fontSize: '2rem',
}));

interface LoginPageProps {}

const LoginPage: React.FunctionComponent<LoginPageProps> = () => {
  return (
    <LoginPageContainer>
      <Grid container justifyContent="center">
        <Grid item md={5} sm={8} xs={12}>
          <Paper>
            <LoginWrapper>
              <LoginItems>
                <LoginTitle variant="h5">Hello!</LoginTitle>
                <LoginTitle variant="h5">Welcome Back</LoginTitle>
                <Typography variant="caption">
                  Watch your growth and organise your workflow.
                </Typography>
              </LoginItems>

              <LoginItems>
                <TextField
                  label="Email"
                  inputProps={{ placeholder: 'welcome@back.com' }}
                  required
                />
              </LoginItems>
              <LoginItems>
                <TextField
                  label="Password"
                  inputProps={{ type: 'password', placeholder: '********' }}
                  required
                />
              </LoginItems>
              <LoginItems>
                <Button variant="contained" sx={{ width: '100%' }}>
                  Sign In
                </Button>
              </LoginItems>
            </LoginWrapper>
          </Paper>
        </Grid>
      </Grid>
    </LoginPageContainer>
  );
};

export default LoginPage;
