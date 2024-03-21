import * as React from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  TextField,
  Typography
} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { validateEmail } from '../../utils/helpers';

function Contact() {

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [validEmail, setValidEmail] = React.useState(true);
  const [phone, setPhone] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [error, setError] = React.useState('');
  const [success, setSuccess] = React.useState('');

  const handleInputChange = (e) => {

    //Get name & value of input event
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    //Update state on input
    if (inputType === 'name') {
        setName(inputValue);
    } else if (inputType === 'email') {
        setEmail(inputValue);
        if (email) {
            handleEmailValidation(email)
        }
    } else if (inputType === 'message') {
        setMessage(inputValue);
    }
  };

  const handleEmailValidation = (e) => {

    if (!validateEmail(e)) {
      setValidEmail(false);
    } else {
      setValidEmail(true);
    }
  }

  const handleContactSubmit = (e) => {

    e.preventDefault();

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      setSuccess('');
      return;
    } else if (!name || !message) {
      setError('Please fill out all required fields');
      setSuccess('');
      return;
    }

    //Reset form on submit
    setName('');
    setEmail('');
    setMessage('');
    setError('');
    //Show success message
    setSuccess('Your message has been sent! Thanks for reaching out!');
  }

  return (
    <Container maxWidth='xl'>
      <Typography variant='h5' sx={{mb: '12pt'}}>Let's Get In Touch:</Typography>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <Card sx={{mb:'12pt', minWidth: '60vw'}}>
          <CardHeader subheader='Send Me a Message:' />
          <CardContent
            component='form'
            noValidate
            autoComplete='off'
            onSubmit={handleContactSubmit}
          >
            <TextField
              name='name'
              value={name}
              label='*Full Name'
              variant='outlined'
              onChange={handleInputChange}
              sx={{mb: '8pt', width: '100%'}}
            />
            {validEmail ? (
              <TextField
              name='email'
              value={email}
              label='*Email'
              variant='outlined'
              onChange={handleInputChange}
              sx={{mb: '8pt', width: '100%'}}
              />
            ) : (
              <TextField
              error
              name='email'
              value={email}
              label='*Email'
              helperText="Invalid Email Address."
              onChange={handleInputChange}
              sx={{mb: '8pt', width: '100%'}}
            />
            )}
            <TextField
              name='phone'
              value={phone}
              label='Phone #'
              variant='outlined'
              onChange={handleInputChange}
              sx={{mb: '8pt', width: '100%'}}
            />
            <TextField
              name='message'
              value={message}
              label='*Message'
              variant='outlined'
              onChange={handleInputChange}
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
            <br/><br/>
            <Typography variant='body2' color='text.secondary'>
              Messages will be delivered to my business email. I will get back to you as soon as I see your message!
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  )
}

export default Contact;