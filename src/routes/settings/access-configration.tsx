import React, { FunctionComponent } from 'react';
import { Grid } from '@mui/material';
import { Paper, PaperHeader } from '@components/atoms/Paper';

interface AccessConfigurationPageProps {}

const AccessConfigurationPage: FunctionComponent<AccessConfigurationPageProps> =
  () => {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper>
            <PaperHeader title="Groups" />
          </Paper>
        </Grid>
      </Grid>
    );
  };

export default AccessConfigurationPage;
