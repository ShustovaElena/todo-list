import { Typography, Container } from "@mui/material";

export const Header = () => {
  return (
   <Container maxWidth="100%" sx={{backgroundColor: 'var(--main-color)'}}>
      <Typography variant="h2" component="h2" align="center" 
      sx={{color: 'var(--header-text-color)', textTransform: 'uppercase'}}>
        Todo List
      </Typography>
    </Container> 
  );
}