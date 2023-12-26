import { AppBar, Typography, Toolbar, Box } from "@mui/material";

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar sx={{ borderBottom: "2px solid #fff" }}>
          <Typography variant="h6">The Dance Directory</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
