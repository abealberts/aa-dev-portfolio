import { Container, Typography } from "@mui/material";
import Content from "../components/content/Content";

function Home() {

  const bodyContent = [
    {
      header: 'About Me',
      body: 'My name is Abe Alberts and I am a full stack web developer. I specialize in the MERN stack, consisting of MongoDB, Express, React, and Node. I am a creative-minded individual with a passion for solving problems and developing new and exciting projects.'
    },
    {
      header: 'My Experience',
      body: "I recently graduated from the UW Coding Bootcamp. Since then, I've been developing projects including this site and those found on the projects page. I've grown passionate about development and am excited to build upon my knowledge and excel in a professional setting. I have a strong design background, with more than 10 years of experience working as a designer/creative director. With this experience, I am able to proficiently conceptualize, design, and develop web applications using strong design fundamentals."
    },
    {
      header: 'My Work',
      body: 'Work in progress...'
    }
  ]

    return (
      <Container maxWidth='xl'>
        <Typography variant="h3">Hello 👋</Typography>
        <Typography variant="h5">Welcome to my portfolio.</Typography>
        <br/>
        <Content props={bodyContent} />
      </Container>
    )
  }

export default Home;