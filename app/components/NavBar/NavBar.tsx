"use client";

import { AppBar, Toolbar, Box, Typography, Fab, Stack } from "@mui/material";
import { useState } from "react";
import AddFestivalDialog from "../AddFestivalDialog/AddFestivalDialog";
import AddIcon from "@mui/icons-material/Add";

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
                size="small"
                onClick={() => setShowDialog(true)}
                title="add festival"
              >
                <AddIcon />
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
