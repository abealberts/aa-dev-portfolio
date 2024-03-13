import * as React from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  TextField,
  Typography
} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

function Contact() {

    return (
      <>
        <Typography variant='h5' sx={{mb: '12pt'}}>Let's Get In Touch:</Typography>
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Card sx={{mb:'12pt', minWidth: '56%'}}>
            <CardHeader subheader='Send Me a Message:' />
            <CardContent
              component='form'
              noValidate
              autoComplete='off'
              onSubmit=''
            >
              <TextField
                id='name'
                label='Full Name'
                variant='outlined'
                sx={{mb: '8pt', width: '100%'}}
              />
              <TextField
                id='email'
                label='Email'
                variant='outlined'
                sx={{mb: '8pt', width: '100%'}}
              />
              <TextField
                id='message'
                label='Message'
                variant='outlined'
                multiline
                rows={4}
                sx={{mb: '8pt', width: '100%'}}
              />
              <Button
                variant='contained'
                endIcon={<SendIcon />}
                type='submit'
                sx={{mb: '8pt'}}
              >
                Send Message
              </Button>
              <Typography variant='body2' color='text.secondary'>
                Messages will be delivered to my business email. I will get back to you as soon as I see your message!
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </>
    )
  }

export default Contact;