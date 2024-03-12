import { Divider, Typography } from "@mui/material";

function Content({ props }) {

    const bodyContent = props.map((item, index) => (
        <>
            <Typography variant='h6' key={`header${index}`}>{item.header}</Typography>
            <Typography key={`body${index}`}>{item.body}</Typography>
            <br/>
            <Divider></Divider>
            <br/>
        </>
    ));

    console.log(props);

    return (
      <>
        {bodyContent}
      </>
    )
  }

export default Content;