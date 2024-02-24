"use client";

import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Fab,
  Stack,
  Collapse,
  Badge,
} from "@mui/material";
import { useState } from "react";
import AddFestivalDialog from "../AddFestivalDialog/AddFestivalDialog";
import AddIcon from "@mui/icons-material/Add";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
import FestivalFilters from "../FestivalFilters/FestivalFilters";
import { useSearchParams } from "next/navigation";

const NavBar = () => {
  const searchParams = useSearchParams();
  const [showDialog, setShowDialog] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

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

              <Fab
                size="small"
                onClick={() => setShowFilters(!showFilters)}
                title="filter festivals"
              >
                <Badge badgeContent={searchParams.size} color="error">
                  <FilterListOutlinedIcon />
                </Badge>
              </Fab>
            </Stack>
          </Toolbar>

          <Collapse in={showFilters} timeout="auto" unmountOnExit>
            <FestivalFilters />
          </Collapse>
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
