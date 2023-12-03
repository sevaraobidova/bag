import * as React from 'react';
import { Container, styled, Typography, Toolbar, CssBaseline, Box, AppBar, Button } from '@mui/material';
import { Search, Menu as MenuIcon } from '@mui/icons-material'; // Renamed Menu to MenuIcon
import logo from '../../assets/logo.png'

const drawerWidth = 240;
const navItems = ['Home', 'Feature', 'About', 'Product'];

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: 'space-between',
  alignItems: 'center',
});

export default function Header() {
  return (
    <div>
      <CssBaseline />
      <AppBar sx={{backgroundColor: 'transparent', boxShadow: 'none'}}>
        <Container maxWidth='lg'>
          <StyledToolBar>
            <img src={logo} alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem' }}>
              {navItems.map((item)=>(
                <Typography variant='body1' color='secondary' key={item}>{item}</Typography>
              ))}
              <Button variant='contained' color='primary'> Shop now</Button>
            </Box>
          </StyledToolBar>
        </Container>
      </AppBar>
    </div>
  );
}
