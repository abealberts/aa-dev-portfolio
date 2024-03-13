import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Collapse,
    Button,
    Typography,
    Divider
} from "@mui/material";

const projectArray = [
    {
        title: 'Spirit Labs',
        tech: 'MongoDb, Express, React, Node',
        deployed: 'https://spiritlabs.onrender.com',
        github: 'https://github.com/DimtheQuiet21/SpiritLab2',
        image: 'https://placehold.co/600x800',
        description: 'Spirit Labs is a passion project created by myself and two fellow MERN stack developers. The vision is an interactive space to discover cocktail recipes and learn about mixology. Spirit Labs is in early development and is actively being developed.',
        expandedBody1: "Spirit Labs revolves around 'The Lab': an interactive space to view, modify, and experiment with your favorite cocktail recipes. The Lab will render a visual representation of the loaded recipe, and will rerender in real time to visualize your additions and modifications.",
        expandedBody2: "Apart from The Lab, Spirit Labs offers a robust search tool to find cocktail recipes based on name or an ingredient (or multiple ingredients). Don't know what to make, but you have a lemon and some gin laying around? Spirit Labs will find any recipe in the database that matches with your ingredients. Spirit Labs also offers a few handy tools on the home page to get you inspired, including: the Drink of the Day, Random Recipe Generator, and the Top Drinks (tracked via amount of favorites a recipe has received).",
        expandedBody3: "Spirit Labs is still in early development, but we have exciting plans to expand our functionality and polish. Some of our future plans include more advanced Lab features (saving custom recipes to user profiles, generating average recipes based on all users), social features, educational mixology content, trending seasonal recipes, and more.",
        expandedBody4: "Personally, my work on this project has been mainly focused on the rendering of ingredients/rendering the visual svg representation based on recipe values, layout, stylings, and navigation. Our team is very collaborative, and we've all dipped our toes into most areas of the projects thus far. There is a lot of work yet to be done, and we're excited to continue developing Spirit Labs into a polished product.",
    },
    {
        title: 'Book Search',
        tech: 'MongoDb, Express, React, Node',
        deployed: 'https://aa-book-search-engine.onrender.com/',
        github: 'https://github.com/abealberts/aa-book-search-engine',
        image: 'https://placehold.co/600x800',
        description: 'This app utilizes the Google Books API to search for and save books. Users can add and remove books to create a reading list.',
        expandedBody1: "Search for any book using Google's Book API. Create an account to save books to your reading list, so you never forget about that book your buddy recommended! Finished a book on your list? Navigate to your list and remove the book you completed.",
        expandedBody2: 'This app was created by converting a RESTFUL API app into a MERN stack application. This means 80% of the app was rewritten in order to use Apollo & MongoDB. Much of the front end logic needed to be rewritten, as well, to utilize graphQL mutations and queries. User sessions are authenticated using JSON Web Tokens. Passwords are encrypted via BCrypt.',
        expandedBody3: 'This app was one of my first deep dives into the full MERN stack. Though the app is basic in design and function, it proved to be a great learning experience and was a fun, challenging project to tackle.',
        expandedBody4: '',
    },
]

function ProjectCards() {
    const [expanded, setExpanded] = React.useState(Array(projectArray.length).fill(false));

    const handleExpand = (index) => {
        const newExpanded = [...expanded];
        newExpanded[index] = !newExpanded[index];
        setExpanded(newExpanded);
    }

    const projectMap = projectArray.map((project, index) => (
        <>
        <Card key={project.title} sx={{mb: '12pt'}}>
            <CardHeader
                title={project.title}
                subheader={project.tech}
            />
            <CardMedia
                component='img'
                sx={{
                    height: { xs: '200px', sm: '500px' },
                }}
                image={project.image}
                alt={`${project.title} Logo or Screenshot`}
            />
    
            {/* BUTTON LINKS */}
            <CardActions disableSpacing sx={{justifyContent: 'space-between'}}>
                <Button
                    component={RouterLink}
                    to={project.deployed}
                    variant='contained'
                    sx={{width: '60%'}}
                >
                    {project.title}
                </Button>
                <Button
                    component={RouterLink}
                    to={project.github}
                    variant='outlined'
                    sx={{width: '38%'}}
                >
                    GitHub
                </Button>
            </CardActions>

            <Divider sx={{width: '95%', margin: 'auto', p: '1pt'}}/>
    
            {/* DESCRIPTION */}
            <CardContent>
                <Typography variant='body2' color='text.secondary'>
                    {project.description}
                </Typography>
            </CardContent>
    
            {/* EXPANDED CONTENT */}
            <Collapse
                in={expanded[index]}
                timeout='auto'
                unmountOnExit
            >
                <CardContent>
                    <Typography variant='subtitle2' paragraph>
                        More on {project.title}:
                    </Typography>
                    <Typography variant='body2' paragraph>
                        {project.expandedBody1}
                    </Typography>
                    <Typography variant='body2' paragraph>
                        {project.expandedBody2}
                    </Typography>
                    <Typography variant='body2' paragraph>
                        {project.expandedBody3}
                    </Typography>
                    <Typography variant='body2' paragraph>
                        {project.expandedBody4}
                    </Typography>
                </CardContent>
            </Collapse>
    
            {/* EXPAND BUTTON */}
            <CardActions disableSpacing>
                <Button
                    onClick={() => handleExpand(index)}
                    aria-expanded={expanded[index]}
                >
                    {!expanded[index] ? `More Details ⬇` : 'Collapse ⬆'}
                </Button>
            </CardActions>
        </Card>
        </>
    ));

    return (
      <>
        {projectMap}
      </>
    )
}

export default ProjectCards;
