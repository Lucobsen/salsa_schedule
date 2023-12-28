import { AppBar, Toolbar, Box, Typography } from "@mui/material";

const NavBar = () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="fixed">
      <Toolbar
        sx={{
          borderBottom: "2px solid #fff",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6" style={{ color: "#fff" }}>
          The Dance Directory
        </Typography>
        {/* <Stack direction="row" spacing={1}>
            <Fab
              variant="extended"
              sx={{ textTransform: "none" }}
              onClick={async () => addFestival()}
            >
              Add Festival
            </Fab>
            <Fab
              variant="extended"
              sx={{ textTransform: "none" }}
              onClick={async () => {
                const fests = await getFestivals();
                window.alert(fests);
              }}
            >
              Get Festivals
            </Fab>
          </Stack> */}
      </Toolbar>
    </AppBar>
  </Box>
);

export default NavBar;
