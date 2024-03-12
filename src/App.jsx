import * as React from 'react';
import { Outlet } from 'react-router-dom';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline, Container } from '@mui/material';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {

  return (
    <Container>
        <CssBaseline />
        <Navbar />
          <Container maxWidth='xl' sx={{mt: 10}}>
            <Outlet />
          </Container>
        <Footer />
    </Container>
  )
}

export default App;