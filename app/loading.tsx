import { CircularProgress, Container } from "@mui/material";

const Loader = () => (
  <Container
    sx={{
      pt: "10rem",
      display: "flex",
      justifyContent: "center",
    }}
  >
    <CircularProgress />
  </Container>
);

export default Loader;
