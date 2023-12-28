"use client";

import { addFestival, getFestivals } from "@/app/actions";
import { AppBar, Toolbar, Box, Fab, Stack } from "@mui/material";
import Link from "next/link";

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar
          sx={{
            borderBottom: "2px solid #fff",
            justifyContent: "space-between",
          }}
        >
          <Link
            style={{ textDecoration: "none", color: "#fff", fontSize: 20 }}
            href="/"
          >
            The Dance Directory
          </Link>
          <Stack direction="row" spacing={1}>
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
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
