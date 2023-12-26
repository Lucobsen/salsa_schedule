import { festivals } from "@/data/_data";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { format } from "date-fns";

interface MonthProps {
  params: {
    month: string;
  };
}

const Month = ({ params }: MonthProps) => {
  const { month } = params;

  //! TODO: sort by start & end dates
  const monthFestivals = festivals[month];

  return (
    <Container sx={{ mt: 10 }}>
      {monthFestivals.length === 0 && (
        <Typography>No festivals found</Typography>
      )}

      {monthFestivals.length > 0 &&
        monthFestivals.map((fest) => (
          <Box
            key={fest.name}
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
            <Typography variant="h6">{fest.name}</Typography>
            <Grid container>
              <Grid item xs={12} sm={6}>
                <Typography variant="caption">
                  Location: {fest.location}
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Stack direction="row" spacing={0.5}>
                  <Typography variant="caption">Styles:</Typography>
                  {fest.styles.map((style) => (
                    <Typography key={`${fest.name}-${style}`} variant="caption">
                      {style}
                    </Typography>
                  ))}
                </Stack>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography variant="caption">
                  Start Date: {format(fest.startDate, "dd-MM-yyyy")}
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography variant="caption">
                  End Date: {format(fest.endDate, "dd-MM-yyyy")}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        ))}
    </Container>
  );
};

export default Month;
