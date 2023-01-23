import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NestedModal from '../Modal';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between'
});

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

function NavBar() {
  return (
    <div>
      <AppBar position="fixed" color="third">
        <StyledToolbar>
          <MenuIcon
            color="white"
            fontSize="large"
            sx={{ display: { xs: 'block', sm: 'block', md: 'none' } }}
          />
          <IconButton
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}
          >
            <FavoriteIcon fontSize="large" color="white" />
            <NestedModal />
            <FavoriteIcon fontSize="large" color="white" />
          </IconButton>
          <Typography color="secondary" variant="h6" fontWeight="bold">
            Felíz Día De San Valentín
          </Typography>
          <IconButton>
            <Typography variant="h6" color="secondary">
              MyN
            </Typography>
          </IconButton>
        </StyledToolbar>
      </AppBar>
      <Offset />
    </div>
  );
}

export default NavBar;
