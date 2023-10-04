import { AppBar, Toolbar, Typography } from '@mui/material';

function Header() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" flexGrow={1}>
          Prueba Landing 4/10/2023
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
