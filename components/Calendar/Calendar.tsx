import { months } from "@/data/_data";
import { Grid, Button } from "@mui/material";

const Calendar = () => (
  <Grid container rowGap={2} columnGap={2} justifyContent="center">
    {months.map((month) => (
      <Grid item xs={12} sm={3} key={month}>
        <Button fullWidth variant="contained" sx={{ height: 50 }}>
          {month}
        </Button>
      </Grid>
    ))}
  </Grid>
);

export default Calendar;
