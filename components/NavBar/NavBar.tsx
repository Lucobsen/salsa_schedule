import { AppBar, Toolbar, Box } from "@mui/material";
import Link from "next/link";

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar sx={{ borderBottom: "2px solid #fff" }}>
          <Link
            style={{ textDecoration: "none", color: "#fff", fontSize: 20 }}
            href="/"
          >
            The Dance Directory
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
