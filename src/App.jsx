import * as React from 'react';
import { Outlet } from 'react-router-dom';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline, Box } from '@mui/material';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {

  return (
    <>
        <CssBaseline />
          <Box sx={{
            mt: 10,
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <Navbar />
            <Outlet />
            <Footer />
          </Box>
        
    </>
  )
}

export default App;