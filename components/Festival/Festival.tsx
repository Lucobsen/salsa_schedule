import { Festival } from "@/data/_data";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { format } from "date-fns";

const FestivalItem = ({
  styles,
  name,
  location,
  startDate,
  endDate,
}: Festival) => {
  return (
    <Box
      key={name}
      sx={{
        height: "fit-content",
        backgroundColor: "#1976d2",
        mb: 4,
        border: "2px solid #fff",
        borderRadius: 2,
        color: "#fff",
        p: 2,
        textTransform: "uppercase",
      }}
    >
      <Typography variant="h6">{name}</Typography>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Typography variant="caption">Location: {location}</Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Stack direction="row" spacing={0.5}>
            <Typography variant="caption">Styles:</Typography>
            {styles.map((style) => (
              <Typography key={`${name}-${style}`} variant="caption">
                {style}
              </Typography>
            ))}
          </Stack>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography variant="caption">
            Start Date: {format(startDate, "dd-MM-yyyy")}
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography variant="caption">
            End Date: {format(endDate, "dd-MM-yyyy")}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FestivalItem;
