import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import Form from '../Form/Form';

function App() {
  const client = new ApolloClient({
    uri: process.env.REACT_APP_API_URI,
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Grid
        container
        justifyContent='center'
        alignItems='center'
        sx={{ width: '100vw', height: '100vh' }}
      >
        <Paper
          sx={{
            padding: 5,
            backgroundColor: '#282c34',
            border: '1px solid white',
          }}
          elevation={4}
        >
          <Typography
            variant='h5'
            sx={{ marginBottom: 5 }}
            textAlign={'center'}
            component='h2'
          >
            T-Form
          </Typography>
          <Form />
        </Paper>
      </Grid>
    </ApolloProvider>
  );
}

export default App;
