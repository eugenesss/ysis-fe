import React, { FunctionComponent } from 'react';
import { Redirect } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import Button from '@mui/material/Button';
import { doLogout } from '@app/lib/auth';

interface LogoutProps {}

const Logout: FunctionComponent<LogoutProps> = () => {
  const [logout, setLogout] = React.useState(false);

  const logoutAction = () => {
    doLogout();
    setLogout(true);
  };

  if (logout) {
    return <Redirect to="/login" />;
  }
  return (
    <Button
      onClick={logoutAction}
      style={{ color: '#545454', width: '120px' }}
      startIcon={<LogoutIcon />}
    >
      Logout
    </Button>
  );
};

export default Logout;
