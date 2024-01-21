import { Skeleton, Stack } from "@mui/material";

const Loader = () => (
  <Stack spacing={4} alignItems="center">
    {Array.from(Array(4).keys()).map((item) => (
      <Skeleton
        key={item}
        sx={{ backgroundColor: "rgba(100, 100, 100, 0.3)" }}
        variant="rounded"
        height={126}
        width="80vw"
      />
    ))}
  </Stack>
);

export default Loader;
