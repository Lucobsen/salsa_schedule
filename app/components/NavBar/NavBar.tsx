"use client";

import { AppBar, Toolbar, Box, Typography, Fab, Stack } from "@mui/material";
import { useState } from "react";
import AddFestivalDialog from "../AddFestivalDialog/AddFestivalDialog";

const NavBar = () => {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <>
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
            <Stack direction="row" spacing={1}>
              <Fab
                variant="extended"
                sx={{ textTransform: "none" }}
                onClick={() => setShowDialog(true)}
              >
                Add Festival
              </Fab>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>

      <AddFestivalDialog
        showDialog={showDialog}
        setShowDialog={setShowDialog}
      />
    </>
  );
};

export default NavBar;
