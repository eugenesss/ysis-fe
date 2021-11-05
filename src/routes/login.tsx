import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Grid, Typography, Paper, FormHelperText } from '@mui/material';
import TextField from '@components/atoms/Textfield';
import Checkbox from '@components/atoms/Checkbox';
import { doLogin } from '@lib/auth';

import { styled } from '@mui/system';
const LoginPageContainer = styled('div')({
  height: '100vh',
  width: '100vw',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f3f3f3',
});

const LoginWrapper = styled(Paper)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '450px',
  margin: 'auto',
}));

const LoginItems = styled('div')(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

const LoginTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 600,
  fontSize: '2rem',
}));

const LoginActionsWrapper = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(0.5),
  display: 'flex',
  justifyContent: 'space-between',
}));

interface LoginPageProps {}

const LoginPage: React.FunctionComponent<LoginPageProps> = () => {
  const [username, setUsername] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [rememberMe, setRememberMe] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<string>('');

  const history = useHistory();

  const onSubmit = async (e: React.FormEvent) => {
    try {
      await doLogin({ username, password, rememberMe });
      history.push('/');
    } catch (err) {
      setErrorMessage(err);
    }

    e.preventDefault();
  };

  return (
    <LoginPageContainer>
      <Grid container justifyContent="center">
        <Grid item md={5} sm={8} xs={12}>
          <LoginWrapper>
            <LoginItems>
              <LoginTitle variant="h5">Hello!</LoginTitle>
              <LoginTitle variant="h5">Welcome Back</LoginTitle>
              <Typography variant="caption">
                Watch your growth and organise your workflow.
              </Typography>
            </LoginItems>
            <form onSubmit={onSubmit}>
              <LoginItems>
                <TextField
                  label="Username"
                  inputProps={{
                    placeholder: 'welcome@back.com',
                    value: username,
                    onChange: (e) => setUsername(e.target.value),
                  }}
                  required
                />
              </LoginItems>
              <LoginItems>
                <TextField
                  label="Password"
                  inputProps={{
                    type: 'password',
                    placeholder: '********',
                    value: password,
                    onChange: (e) => setPassword(e.target.value),
                  }}
                  required
                />
                <LoginActionsWrapper>
                  <Checkbox
                    label="Remember me?"
                    checkboxProps={{
                      value: rememberMe,
                      onChange: () => setRememberMe((prev) => !prev),
                    }}
                  />
                </LoginActionsWrapper>
              </LoginItems>
              <LoginItems>
                <Button
                  variant="contained"
                  sx={{ width: '100%' }}
                  type="submit"
                >
                  Sign In
                </Button>
              </LoginItems>
              {errorMessage && (
                <LoginItems>
                  <FormHelperText error>{errorMessage}</FormHelperText>
                </LoginItems>
              )}
            </form>
          </LoginWrapper>
        </Grid>
      </Grid>
    </LoginPageContainer>
  );
};

export default LoginPage;
