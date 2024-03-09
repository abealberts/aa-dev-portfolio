import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Container } from '@mui/material';


function App() {

  return (
    <>
        <CssBaseline />
          {/* <Navbar /> */}
          <Container maxWidth='xl' sx={{pt: "24px"}}>
            <Outlet />
          </Container>
    </>
  )
}

export default App
