import { Box, Divider, Typography } from "@mui/material";

function Content({ props }) {

    const bodyContent = props.map((item, index) => (
        <Box key={index}>
            <Typography variant='h6'>{item.header}</Typography>
            <Typography>{item.body}</Typography>
            <br/>
            <Divider/>
            <br/>
        </Box>
    ));

    console.log(props);

    return (
      <>
        {bodyContent}
      </>
    )
  }

export default Content;