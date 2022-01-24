import React, { FunctionComponent } from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { Paper, PaperHeader } from '@components/atoms/Paper';

interface UserManagementPageProps {}

const UserManagementPage: FunctionComponent<UserManagementPageProps> = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={12}>
        <Paper>
          <PaperHeader
            title="User Management"
            action={
              <>
                <Button size="small" variant="contained">
                  New User
                </Button>
              </>
            }
          />
        </Paper>
      </Grid>
      <Grid item xs={12} md={12}>
        <Paper>
          <Typography variant="body1">table here</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default UserManagementPage;
