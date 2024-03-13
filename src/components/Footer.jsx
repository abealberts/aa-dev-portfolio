import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Container,
  Typography,
  Divider
} from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';

function Footer() {

    return (
      <Container maxWidth='md' sx={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#E9F4FF', borderTop: 'solid 2px #CFE1F3'}}>

        <Box>
          <List>

            <ListItem disablePadding>
              <ListItemButton component={RouterLink} to='/'>
                <ListItemText primary='Home' primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }} />
              </ListItemButton>
            </ListItem>

            <Divider />

            <ListItem disablePadding>
              <ListItemButton component={RouterLink} to='/projects'>
                <ListItemText primary='Projects' primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }} />
              </ListItemButton>
            </ListItem>

            <Divider />

            <ListItem disablePadding>
              <ListItemButton component={RouterLink} to='/contact'>
                <ListItemText primary='Contact' primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }} />
              </ListItemButton>
            </ListItem>

          </List>
        </Box>

        <Box sx={{maxWidth: '60%'}}>
          <Typography variant='body2'>Abe Alberts - Web Dev Portfolio<br/>©2024 Disadventure Co.</Typography>
        </Box>
      </Container>
    )
  }

export default Footer;