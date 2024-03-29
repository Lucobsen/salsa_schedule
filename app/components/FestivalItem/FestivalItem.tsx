import { Festival } from "@/app/lib/actions";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { format } from "date-fns";
import Link from "next/link";
import DeleteFestivalButton from "../DeleteFestivalButton/DeleteFestivalButton";

const FestivalItem = ({
  styles,
  name,
  location,
  startDate,
  endDate,
  url,
}: Festival) => (
  <Box
    sx={{
      height: "fit-content",
      backgroundColor: "#1976d2",
      border: "2px solid #fff",
      borderRadius: 2,
      color: "#fff",
      p: 2,
      textTransform: "uppercase",
      width: "100%",
      maxWidth: "800px",

      "&:hover": {
        boxShadow: "0 0 10px 2px #fff",
      },
    }}
  >
    <DeleteFestivalButton name={name} />
    <Link
      href={url}
      target="_blank"
      style={{ color: "#fff", textDecoration: "none" }}
    >
      <Typography color="inherit" variant="h6">
        {name}
      </Typography>
      <Grid container color="inherit">
        <Grid item xs={12} sm={6}>
          <Typography variant="caption">Location: {location}</Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Stack direction="row" spacing={0.5}>
            <Typography variant="caption">
              Styles: {styles.join(", ")}
            </Typography>
          </Stack>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography variant="caption">
            Start Date: {format(startDate, "do MMM yyyy")}
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography variant="caption">
            End Date: {format(endDate, "do MMM yyyy")}
          </Typography>
        </Grid>
      </Grid>
    </Link>
  </Box>
);

export default FestivalItem;
