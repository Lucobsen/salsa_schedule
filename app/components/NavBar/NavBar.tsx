import { AppBar, Toolbar, Box, Typography } from "@mui/material";

const NavBar = () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="fixed">
      <Toolbar
        sx={{
          borderBottom: "2px solid #fff",
        }}
      >
        <Typography variant="h6" style={{ color: "#fff" }}>
          The Dance Directory
        </Typography>
      </Toolbar>
    </AppBar>
  </Box>
);

export default NavBar;
