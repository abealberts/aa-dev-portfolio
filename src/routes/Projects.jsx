import {
  Box,
  Container,
  Typography
} from "@mui/material";
import ProjectCards from '../components/project/ProjectCards';

function Projects() {

    return (
      <Container maxWidth='xl'>
        <Typography variant='h5'>My Projects:</Typography>
        <Typography variant='subtitle2'>Note: Some apps will take a bit to connect. Please allow for server to spin up. It could take up to a couple of minutes, as the servers spin down after periods of inactivity. Thank you.</Typography>
        <Box maxWidth='md' sx={{
          mt: '12pt',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          <ProjectCards />
        </Box>
      </Container>
    )
  }

export default Projects;