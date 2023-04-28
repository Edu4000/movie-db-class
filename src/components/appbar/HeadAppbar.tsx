import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

export default function HeadAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Movies DB
          </Typography>
          
          <Link key="home" to="/">
          <Button color="inherit">Home</Button>
          </Link>
          
          <Link key="movies" to="/movies">
          <Button color="inherit">Movies</Button>
          </Link>

          <Link key="series" to="/series">
          <Button color="inherit">Anime</Button>
          </Link>

          <Link key="about" to="/about">
          <Button color="inherit">About Us</Button>
          </Link>

          <Link key="login" to="/login">
          <Button color="inherit">Login</Button>
          </Link>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}